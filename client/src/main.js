// three js core and helpers
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { ViewHelper } from 'three/examples/jsm/helpers/ViewHelper.js';
import { CSS2DRenderer, CSS2DObject } from 'three/examples/jsm/renderers/CSS2DRenderer.js';
// texture and export utilities
import { createLayoutTexture, createHoleMaskTexture } from './texture.js';
import { exportZip } from './export.js';

// panel ui elements
const viewport = document.querySelector('#viewport');
const widthInput = document.querySelector('#width');
const heightInput = document.querySelector('#height');
const depthInput = document.querySelector('#depth');
const chamferInput = document.querySelector('#chamfer');
const imageLayoutInput = document.querySelector('#imageLayout');
const addImageSlotBottomBtn = document.querySelector('#addImageSlotBottom');
const imageSlots = Array.from(document.querySelectorAll('#imageSlots .slot'));
const matchWidthBtn = document.querySelector('#matchWidth');
const matchHeightBtn = document.querySelector('#matchHeight');
const screwHolesInput = document.querySelector('#screwholes');
const togglePanelBtn = document.querySelector('#togglePanel');
const exportBtn = document.querySelector('#exportBtn');
const imageStatus = document.querySelector('#imageStatus');
const panel = document.querySelector('#panel');
const appRoot = document.querySelector('#app');
const sectionToggles = document.querySelectorAll('.section-toggle');
const helpOverlay = document.querySelector('#helpOverlay');
const helpBtn = document.querySelector('#helpBtn');

// app state for geometry and image
const state = {
  width: Number(widthInput.value),
  height: Number(heightInput.value),
  depth: Number(depthInput.value),
  chamfer: chamferInput.checked,
  screwHoles: screwHolesInput?.checked ?? false,
  imageCount: 1,
  layout: imageLayoutInput.value,
  images: Array.from({ length: 4 }, () => ({
    image: null,
    file: null,
    rotation: 0,
    margin: { left: 0, right: 0, top: 0, bottom: 0 }
  }))
};

const VIEWCUBE_SIZE = 120;
const VIEWCUBE_MARGIN = 12;

// scene setup
const scene = new THREE.Scene();
scene.background = new THREE.Color('#0f1317');

// camera setup
const camera = new THREE.PerspectiveCamera(45, 1, 0.1, 2000);
camera.position.set(0, 0, 80);
camera.lookAt(0, 0, 0);

// renderer setup
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(viewport.clientWidth, viewport.clientHeight);
renderer.shadowMap.enabled = true;
renderer.autoClear = false;
viewport.appendChild(renderer.domElement);

// viewcube renders in the main renderer to avoid multi-context issues

// label renderer for dimension text
const labelRenderer = new CSS2DRenderer();
labelRenderer.setSize(viewport.clientWidth, viewport.clientHeight);
labelRenderer.domElement.style.position = 'absolute';
labelRenderer.domElement.style.top = '0';
labelRenderer.domElement.style.left = '0';
labelRenderer.domElement.style.pointerEvents = 'auto';
viewport.appendChild(labelRenderer.domElement);
labelRenderer.domElement.addEventListener('pointerdown', forwardViewportEvent);
labelRenderer.domElement.addEventListener('pointermove', forwardViewportEvent);
labelRenderer.domElement.addEventListener('pointerup', forwardViewportEvent);
labelRenderer.domElement.addEventListener('wheel', forwardViewportEvent, { passive: false });
labelRenderer.domElement.addEventListener('pointerdown', (event) => {
  if (tryStartDimensionDrag(event)) {
    event.preventDefault();
    event.stopPropagation();
  }
});
viewport.addEventListener('wheel', (event) => {
  if (event.target === renderer.domElement || event.target === labelRenderer.domElement) {
    event.preventDefault();
  }
}, { passive: false });

// orbit controls
const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
controls.dampingFactor = 0.08;
controls.minDistance = 10;
controls.maxDistance = 300;
controls.target.set(0, 0, 0);

// lighting setup
const hemiLight = new THREE.HemisphereLight(0xffffff, 0x202833, 0.9);
scene.add(hemiLight);

const dirLight = new THREE.DirectionalLight(0xffffff, 1.0);
dirLight.position.set(60, 90, 50);
dirLight.castShadow = true;
scene.add(dirLight);

const fillLight = new THREE.DirectionalLight(0x9fc4ff, 0.45);
fillLight.position.set(-40, 30, 20);
scene.add(fillLight);

const rimLight = new THREE.DirectionalLight(0xffffff, 0.35);
rimLight.position.set(-20, 50, -60);
scene.add(rimLight);

// infinite grid floor
const infiniteGrid = createInfiniteGrid();
scene.add(infiniteGrid);

// axis helper
const axisHelper = new THREE.AxesHelper(20);
scene.add(axisHelper);

// panel materials
const defaultMaterial = new THREE.MeshStandardMaterial({
  color: 0x2b3138,
  metalness: 0.2,
  roughness: 0.65
});

// front face material for image
const frontMaterial = new THREE.MeshBasicMaterial({
  color: 0xffffff
});
frontMaterial.toneMapped = false;
frontMaterial.transparent = true;
frontMaterial.alphaTest = 0.5;

// panel mesh and image plane
let mesh = createPanelMesh();
scene.add(mesh);
let imagePlane = createImagePlane();
scene.add(imagePlane);
// dimension helpers
const dimensionGroup = new THREE.Group();
scene.add(dimensionGroup);
const dimensionLabels = createDimensionLabels();
const currentImageObjectUrls = Array.from({ length: 4 }, () => null);
const dimensionOffsets = {
  width: new THREE.Vector3(0, 0, 0),
  height: new THREE.Vector3(0, 0, 0),
  depth: new THREE.Vector3(0, 0, 0)
};
const dimensionDrag = {
  active: null,
  startX: 0,
  startY: 0,
  startOffset: new THREE.Vector3(0, 0, 0)
};
const dimensionVisuals = {
  width: {},
  height: {},
  depth: {}
};
const dimensionHover = {
  active: null
};
const DIMENSION_BASE_COLOR = new THREE.Color(0x9aa4b0);
const DIMENSION_HOVER_COLOR = new THREE.Color(0xffc857);
let activeLabelEditor = null;

const SCREW_EDGE_OFFSET_IN = 0.5;
const M4_DIAMETER_IN = 4 / 25.4;
const M4_RADIUS_IN = M4_DIAMETER_IN / 2;

function isLabelTarget(target) {
  if (!(target instanceof Element)) return false;
  return Boolean(target.closest('.dim-label'));
}

function forwardViewportEvent(event) {
  if (isLabelTarget(event.target) || activeLabelEditor) {
    return;
  }
  if (event.target === renderer.domElement) {
    return;
  }
  if (event.type === 'wheel') {
    event.preventDefault();
    renderer.domElement.dispatchEvent(new WheelEvent(event.type, event));
    return;
  }
  renderer.domElement.dispatchEvent(new PointerEvent(event.type, event));
}

// panel mesh creation
function createPanelMesh() {
  const geometry = createPanelGeometry();
  const panelMesh = new THREE.Mesh(geometry, defaultMaterial);
  panelMesh.castShadow = true;
  panelMesh.receiveShadow = true;
  panelMesh.position.set(0, state.height / 2, 0);
  return panelMesh;
}

// panel geometry updates
function updatePanelGeometry() {
  if (mesh) {
    mesh.geometry.dispose();
    mesh.geometry = createPanelGeometry();
    mesh.position.set(0, state.height / 2, 0);
  }
  updateImagePlane();
  updateFrontTexture();
  updateDimensionHelpers();
}

// image texture updates
function updateFrontTexture() {
  const printable = getPrintableSize();
  const maxTextureSize = Math.min(4096, renderer.capabilities.maxTextureSize || 4096);

  const holeCenters = getScrewHoleCenters({
    width: state.width,
    height: state.height,
    innerW: printable.width,
    innerH: printable.height
  });
  const layoutImages = getLayoutImages().filter((entry) => entry?.image);
  const textureOptions = {
    layout: state.layout,
    maxSize: maxTextureSize,
    ppi: 220,
    count: Math.max(1, layoutImages.length)
  };
  if (frontMaterial.alphaMap) {
    frontMaterial.alphaMap.dispose();
  }
  frontMaterial.alphaMap = createHoleMaskTexture(
    printable.width,
    printable.height,
    holeCenters.map((center) => ({ ...center, r: M4_RADIUS_IN })),
    textureOptions
  );

  const activeCount = layoutImages.length;
  if (activeCount === 0) {
    if (frontMaterial.map) {
      frontMaterial.map.dispose();
      frontMaterial.map = null;
    }
    frontMaterial.needsUpdate = true;
    imageStatus.textContent = 'No images loaded';
    updateImageControlsEnabled(false);
    return;
  }

  const texture = createLayoutTexture(layoutImages, printable.width, printable.height, textureOptions);
  if (frontMaterial.map) {
    frontMaterial.map.dispose();
  }
  frontMaterial.map = texture;
  frontMaterial.needsUpdate = true;
  imageStatus.textContent = `${activeCount} image${activeCount === 1 ? '' : 's'} loaded`;
  updateImageControlsEnabled(true);
}

// parse and clamp numeric inputs
function parseDimension(value, fallback, min, max = Infinity) {
  if (value === '') {
    return fallback;
  }
  const parsed = Number(value);
  if (!Number.isFinite(parsed)) {
    return fallback;
  }
  return Math.min(Math.max(parsed, min), max);
}

// apply dimension inputs to state
function applyDimensionInputs(source) {
  const nextWidth = parseDimension(widthInput.value, state.width, 1);
  const nextHeight = parseDimension(heightInput.value, state.height, 1, 35);
  const nextDepth = parseDimension(depthInput.value, state.depth, 0.1, 1);

  if (nextWidth === null || nextHeight === null || nextDepth === null) {
    return;
  }

  state.width = nextWidth;
  state.height = nextHeight;
  state.depth = nextDepth;
  updatePanelGeometry();
}

// normalize input display
function normalizeDimensionInputs() {
  widthInput.value = state.width.toFixed(2);
  heightInput.value = state.height.toFixed(2);
  depthInput.value = state.depth.toFixed(2);
}

// dimension input listeners
widthInput.addEventListener('input', () => applyDimensionInputs('width'));
heightInput.addEventListener('input', () => applyDimensionInputs('height'));
depthInput.addEventListener('input', () => applyDimensionInputs('depth'));

// chamfer toggle
chamferInput.addEventListener('change', () => {
  state.chamfer = chamferInput.checked;
  updatePanelGeometry();
});

// screw hole toggle
if (screwHolesInput) {
  screwHolesInput.addEventListener('change', () => {
    state.screwHoles = screwHolesInput.checked;
    updatePanelGeometry();
  });
}

// blur normalization
widthInput.addEventListener('blur', () => {
  applyDimensionInputs('width');
  normalizeDimensionInputs();
});
heightInput.addEventListener('blur', () => {
  applyDimensionInputs('height');
  normalizeDimensionInputs();
});
depthInput.addEventListener('blur', () => {
  applyDimensionInputs('depth');
  normalizeDimensionInputs();
});

// image layout controls
imageLayoutInput.addEventListener('change', () => {
  state.layout = imageLayoutInput.value;
  updateFrontTexture();
});

addImageSlotBottomBtn.addEventListener('click', () => {
  setImageCount(state.imageCount + 1);
});

// image slot handlers
imageSlots.forEach((slot) => {
  const index = Number(slot.dataset.index);
  const fileInput = slot.querySelector('.image-input');
  const rotationInput = slot.querySelector('.rotation');
  const advancedToggle = slot.querySelector('.toggle-advanced');
  const advancedPanel = slot.querySelector('.slot-advanced');
  const marginToggle = slot.querySelector('.toggle-margins');
  const marginPanel = slot.querySelector('.slot-margins');
  const marginLeft = slot.querySelector('.margin-left');
  const marginRight = slot.querySelector('.margin-right');
  const marginTop = slot.querySelector('.margin-top');
  const marginBottom = slot.querySelector('.margin-bottom');
  const removeBtn = slot.querySelector('.remove-slot');

  if (advancedPanel) {
    advancedPanel.classList.add('collapsed');
  }
  if (advancedToggle && advancedPanel) {
    advancedToggle.addEventListener('click', () => {
      advancedPanel.classList.toggle('collapsed');
    });
  }
  if (marginPanel) {
    marginPanel.classList.add('collapsed');
  }
  if (marginToggle && marginPanel) {
    marginToggle.addEventListener('click', () => {
      marginPanel.classList.toggle('collapsed');
    });
  }

  fileInput.addEventListener('change', (event) => {
    const file = event.target.files?.[0];
    if (!file) {
      state.images[index].image = null;
      state.images[index].file = null;
      if (currentImageObjectUrls[index]) {
        URL.revokeObjectURL(currentImageObjectUrls[index]);
        currentImageObjectUrls[index] = null;
      }
      updateFrontTexture();
      return;
    }

    const image = new Image();
    image.onload = () => {
      state.images[index].image = image;
      state.images[index].file = file;
      updateFrontTexture();
      if (currentImageObjectUrls[index]) {
        URL.revokeObjectURL(currentImageObjectUrls[index]);
        currentImageObjectUrls[index] = null;
      }
    };
    if (currentImageObjectUrls[index]) {
      URL.revokeObjectURL(currentImageObjectUrls[index]);
    }
    currentImageObjectUrls[index] = URL.createObjectURL(file);
    image.src = currentImageObjectUrls[index];
  });

  rotationInput.addEventListener('change', () => {
    state.images[index].rotation = Number(rotationInput.value) || 0;
    updateFrontTexture();
  });

  marginLeft.addEventListener('input', () => {
    state.images[index].margin.left = Number(marginLeft.value) || 0;
    updateFrontTexture();
  });
  marginRight.addEventListener('input', () => {
    state.images[index].margin.right = Number(marginRight.value) || 0;
    updateFrontTexture();
  });
  marginTop.addEventListener('input', () => {
    state.images[index].margin.top = Number(marginTop.value) || 0;
    updateFrontTexture();
  });
  marginBottom.addEventListener('input', () => {
    state.images[index].margin.bottom = Number(marginBottom.value) || 0;
    updateFrontTexture();
  });

  removeBtn.addEventListener('click', () => {
    removeImageSlot(index);
  });
});

// panel collapse toggle
togglePanelBtn.addEventListener('click', () => {
  const isCollapsed = panel.classList.toggle('collapsed');
  appRoot.classList.toggle('panel-floating', isCollapsed);
  togglePanelBtn.setAttribute('aria-label', isCollapsed ? 'Expand panel' : 'Collapse panel');
  onResize();
});

// section collapse toggles
sectionToggles.forEach((toggle) => {
  toggle.addEventListener('click', () => {
    const section = toggle.closest('.section');
    if (!section) return;
    section.classList.toggle('collapsed');
  });
});

function openHelp() {
  if (!helpOverlay) return;
  helpOverlay.classList.add('is-visible');
  helpOverlay.setAttribute('aria-hidden', 'false');
}

function closeHelp() {
  if (!helpOverlay) return;
  helpOverlay.classList.remove('is-visible');
  helpOverlay.setAttribute('aria-hidden', 'true');
}

if (helpBtn) {
  helpBtn.addEventListener('click', () => {
    openHelp();
  });
}

if (helpOverlay) {
  helpOverlay.addEventListener('click', (event) => {
    if (event.target === helpOverlay) {
      closeHelp();
    }
  });
}

window.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') {
    closeHelp();
  }
});

// match width to image
matchWidthBtn.addEventListener('click', () => {
  const primaryImage = getPrimaryImage();
  if (!primaryImage) {
    return;
  }
  const nextWidth = parseDimension(
    getMatchedWidth(),
    state.width,
    1
  );
  state.width = nextWidth;
  widthInput.value = state.width.toFixed(2);
  updatePanelGeometry();
  updateFrontTexture();
});

// match height to image
matchHeightBtn.addEventListener('click', () => {
  const primaryImage = getPrimaryImage();
  if (!primaryImage) {
    return;
  }
  const nextHeight = parseDimension(
    getMatchedHeight(),
    state.height,
    1,
    35
  );
  state.height = nextHeight;
  heightInput.value = state.height.toFixed(2);
  updatePanelGeometry();
  updateFrontTexture();
});

// export zip
exportBtn.addEventListener('click', async () => {
  const prevScrewHoles = state.screwHoles;
  state.screwHoles = true;
  const exportGeometry = createPanelGeometry();
  state.screwHoles = prevScrewHoles;
  exportGeometry.computeVertexNormals();
  exportGeometry.computeBoundingBox();
  exportGeometry.computeBoundingSphere();
  const exportMesh = new THREE.Mesh(exportGeometry, defaultMaterial);
  exportMesh.position.copy(mesh.position);
  exportMesh.rotation.copy(mesh.rotation);
  exportMesh.scale.copy(mesh.scale);
  exportMesh.updateMatrixWorld(true);

  await exportZip({
    mesh: exportMesh,
    dimensions: {
      width: state.width,
      height: state.height,
      depth: state.depth,
      padX: 0,
      padY: 0
    },
    imageFiles: getActiveFiles(),
    chamfer: {
      enabled: state.chamfer,
      depth: state.chamfer ? state.depth * 0.3 : 0
    }
  });

  exportGeometry.dispose();
});

const clock = new THREE.Clock();
const viewHelper = new ViewHelper(camera, renderer.domElement);
viewHelper.center.copy(controls.target);
renderer.domElement.addEventListener('pointerdown', (event) => {
  if (tryStartDimensionDrag(event)) {
    event.preventDefault();
    event.stopPropagation();
    return;
  }
  if (viewHelper.handleClick(event)) {
    event.preventDefault();
    event.stopPropagation();
  }
});

// resize handling
function onResize() {
  const { clientWidth, clientHeight } = viewport;
  camera.aspect = clientWidth / clientHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(clientWidth, clientHeight);
  labelRenderer.setSize(clientWidth, clientHeight);
}

const resizeObserver = new ResizeObserver(() => {
  requestAnimationFrame(onResize);
});
resizeObserver.observe(viewport);
resizeObserver.observe(document.body);
window.addEventListener('resize', onResize);

// render loop
function animate() {
  requestAnimationFrame(animate);
  const delta = clock.getDelta();
  controls.update();
  if (viewHelper.animating) {
    viewHelper.update(delta);
  }
  renderer.setViewport(0, 0, viewport.clientWidth, viewport.clientHeight);
  renderer.setScissorTest(false);
  renderer.clear();
  renderer.render(scene, camera);
  viewHelper.render(renderer);
  labelRenderer.render(scene, camera);
}

animate();
onResize();
updateSlotVisibility();
openHelp();

// dimension label creation
function createDimensionLabels() {
  const makeLabel = (text) => {
    const el = document.createElement('div');
    el.className = 'dim-label';
    el.textContent = text;
    return new CSS2DObject(el);
  };

  return {
    width: makeLabel(''),
    height: makeLabel(''),
    depth: makeLabel('')
  };
}

// infinite grid shader
function createInfiniteGrid() {
  const geometry = new THREE.PlaneGeometry(10000, 10000, 1, 1);
  const material = new THREE.ShaderMaterial({
    transparent: true,
    depthWrite: false,
    uniforms: {
      minorColor: { value: new THREE.Color(0x7a8796) },
      majorColor: { value: new THREE.Color(0x5c6a79) },
      minorSpacing: { value: 5.0 },
      majorSpacing: { value: 25.0 },
      fadeDistance: { value: 220.0 }
    },
    vertexShader: `
      varying vec3 vWorldPos;
      void main() {
        vec4 worldPos = modelMatrix * vec4(position, 1.0);
        vWorldPos = worldPos.xyz;
        gl_Position = projectionMatrix * viewMatrix * worldPos;
      }
    `,
    fragmentShader: `
      varying vec3 vWorldPos;
      uniform vec3 minorColor;
      uniform vec3 majorColor;
      uniform float minorSpacing;
      uniform float majorSpacing;
      uniform float fadeDistance;
      float gridLine(float spacing) {
        vec2 coord = vWorldPos.xz / spacing;
        vec2 grid = abs(fract(coord - 0.5) - 0.5) / fwidth(coord);
        float line = min(grid.x, grid.y);
        return 1.0 - clamp(line, 0.0, 1.0);
      }
      void main() {
        float minor = gridLine(minorSpacing);
        float major = gridLine(majorSpacing);
        vec3 color = mix(minorColor, majorColor, major);
        float dist = length(cameraPosition.xz - vWorldPos.xz);
        float fade = 1.0 - smoothstep(0.0, fadeDistance, dist);
        float alpha = clamp(max(minor, major) * 1.4, 0.0, 1.0) * fade;
        gl_FragColor = vec4(color, alpha);
      }
    `
  });

  const mesh = new THREE.Mesh(geometry, material);
  mesh.rotation.x = -Math.PI / 2;
  mesh.position.y = 0;
  return mesh;
}

// dimension line updates
function updateDimensionHelpers() {
  dimensionGroup.traverse((child) => {
    if (child.geometry) child.geometry.dispose();
    if (child.material) child.material.dispose();
  });
  dimensionGroup.clear();

  const arrowSize = Math.max(0.4, Math.min(state.width, state.height) * 0.03);
  const coneGeo = new THREE.ConeGeometry(arrowSize * 0.4, arrowSize, 12);
  const epsilon = 0.02;

  const halfW = state.width / 2;
  const halfH = state.height / 2;
  const halfD = state.depth / 2;

  const baseY = 0;
  const wStart = new THREE.Vector3(-halfW, baseY, halfD + epsilon).add(dimensionOffsets.width);
  const wEnd = new THREE.Vector3(halfW, baseY, halfD + epsilon).add(dimensionOffsets.width);
  const hStart = new THREE.Vector3(halfW + epsilon, baseY, halfD).add(dimensionOffsets.height);
  const hEnd = new THREE.Vector3(halfW + epsilon, state.height + baseY, halfD).add(dimensionOffsets.height);
  const dStart = new THREE.Vector3(halfW, state.height + baseY + epsilon, -halfD).add(dimensionOffsets.depth);
  const dEnd = new THREE.Vector3(halfW, state.height + baseY + epsilon, halfD).add(dimensionOffsets.depth);

  dimensionVisuals.width = addDimensionLine(wStart, wEnd, coneGeo);
  dimensionVisuals.height = addDimensionLine(hStart, hEnd, coneGeo);
  dimensionVisuals.depth = addDimensionLine(dStart, dEnd, coneGeo);

  dimensionLabels.width.element.textContent = `${state.width} in`;
  dimensionLabels.height.element.textContent = `${state.height} in`;
  dimensionLabels.depth.element.textContent = `${state.depth} in`;

  dimensionLabels.width.position.copy(wStart).lerp(wEnd, 0.5).add(new THREE.Vector3(0, 0.6, 0));
  dimensionLabels.height.position.copy(hStart).lerp(hEnd, 0.5).add(new THREE.Vector3(0.6, 0, 0));
  dimensionLabels.depth.position.copy(dStart).lerp(dEnd, 0.5).add(new THREE.Vector3(0.6, 0.6, 0));

  dimensionGroup.add(dimensionLabels.width);
  dimensionGroup.add(dimensionLabels.height);
  dimensionGroup.add(dimensionLabels.depth);

  applyDimensionHoverColors();
}

updateDimensionHelpers();

const dimensionNormals = {
  width: new THREE.Vector3(0, 0, 1),
  height: new THREE.Vector3(1, 0, 0),
  depth: new THREE.Vector3(0, 1, 0)
};
const dimensionHitRadius = 14;

function enableLabelEditing(key) {
  if (activeLabelEditor) return;
  const label = dimensionLabels[key];
  if (!label) return;
  const el = label.element;
  activeLabelEditor = key;
  el.contentEditable = 'true';
  el.classList.add('is-editing');
  el.focus();
  const selection = window.getSelection();
  const range = document.createRange();
  range.selectNodeContents(el);
  selection.removeAllRanges();
  selection.addRange(range);
}

function disableLabelEditing(commit) {
  if (!activeLabelEditor) return;
  const key = activeLabelEditor;
  const label = dimensionLabels[key];
  const el = label?.element;
  if (el) {
    if (commit) {
      applyDimensionFromLabel(key, el.textContent || '');
    }
    el.contentEditable = 'false';
    el.classList.remove('is-editing');
  }
  activeLabelEditor = null;
}

function applyDimensionFromLabel(key, rawText) {
  const cleaned = String(rawText).toLowerCase().replace(/[^0-9.]/g, '');
  const value = Number(cleaned);
  if (!Number.isFinite(value)) {
    normalizeDimensionInputs();
    updateDimensionHelpers();
    return;
  }
  if (key === 'width') {
    state.width = parseDimension(value, state.width, 1);
    widthInput.value = state.width.toFixed(2);
  } else if (key === 'height') {
    state.height = parseDimension(value, state.height, 1, 35);
    heightInput.value = state.height.toFixed(2);
  } else if (key === 'depth') {
    state.depth = parseDimension(value, state.depth, 0.1, 1);
    depthInput.value = state.depth.toFixed(2);
  }
  updatePanelGeometry();
  updateFrontTexture();
  normalizeDimensionInputs();
  updateDimensionHelpers();
}

function getLabelScreenPosition(label) {
  const rect = renderer.domElement.getBoundingClientRect();
  const projected = label.position.clone().project(camera);
  return {
    x: (projected.x * 0.5 + 0.5) * rect.width,
    y: (-projected.y * 0.5 + 0.5) * rect.height
  };
}

function pickDimensionLabel(event) {
  const rect = renderer.domElement.getBoundingClientRect();
  const x = event.clientX - rect.left;
  const y = event.clientY - rect.top;
  const labels = {
    width: dimensionLabels.width,
    height: dimensionLabels.height,
    depth: dimensionLabels.depth
  };
  let closest = null;
  let closestDist = Infinity;
  Object.entries(labels).forEach(([key, label]) => {
    const pos = getLabelScreenPosition(label);
    const dx = pos.x - x;
    const dy = pos.y - y;
    const dist = Math.hypot(dx, dy);
    if (dist < dimensionHitRadius && dist < closestDist) {
      closest = key;
      closestDist = dist;
    }
  });
  return closest;
}

function getScreenPoint(vec3) {
  const rect = renderer.domElement.getBoundingClientRect();
  const projected = vec3.clone().project(camera);
  return {
    x: (projected.x * 0.5 + 0.5) * rect.width,
    y: (-projected.y * 0.5 + 0.5) * rect.height
  };
}

function pointToSegmentDistance(px, py, ax, ay, bx, by) {
  const abx = bx - ax;
  const aby = by - ay;
  const apx = px - ax;
  const apy = py - ay;
  const abLenSq = (abx * abx) + (aby * aby) || 1;
  const t = Math.max(0, Math.min(1, (apx * abx + apy * aby) / abLenSq));
  const cx = ax + abx * t;
  const cy = ay + aby * t;
  const dx = px - cx;
  const dy = py - cy;
  return Math.hypot(dx, dy);
}

function pickDimensionHover(event) {
  const rect = renderer.domElement.getBoundingClientRect();
  const x = event.clientX - rect.left;
  const y = event.clientY - rect.top;
  const labelKey = pickDimensionLabel(event);
  let closest = labelKey;
  let closestDist = labelKey ? 0 : Infinity;

  const lineHitThreshold = 8;
  ['width', 'height', 'depth'].forEach((key) => {
    const visual = dimensionVisuals[key];
    if (!visual?.start || !visual?.end) return;
    const a = getScreenPoint(visual.start);
    const b = getScreenPoint(visual.end);
    const dist = pointToSegmentDistance(x, y, a.x, a.y, b.x, b.y);
    if (dist < lineHitThreshold && dist < closestDist) {
      closest = key;
      closestDist = dist;
    }
  });

  return closest;
}

function applyDimensionHoverColors() {
  ['width', 'height', 'depth'].forEach((key) => {
    const visual = dimensionVisuals[key];
    if (!visual?.line || !visual?.coneA || !visual?.coneB) return;
    const color = (dimensionHover.active === key)
      ? DIMENSION_HOVER_COLOR
      : DIMENSION_BASE_COLOR;
    visual.line.material.color.copy(color);
    visual.coneA.material.color.copy(color);
    visual.coneB.material.color.copy(color);
    dimensionLabels[key].element.classList.toggle('is-hover', dimensionHover.active === key);
  });
}

function updateDimensionHover(event) {
  if (dimensionDrag.active) return;
  const key = pickDimensionHover(event);
  if (key === dimensionHover.active) return;
  dimensionHover.active = key;
  applyDimensionHoverColors();
}

function tryStartDimensionDrag(event) {
  if (activeLabelEditor) return false;
  const key = pickDimensionLabel(event);
  if (!key) return false;
  const rect = renderer.domElement.getBoundingClientRect();
  dimensionDrag.active = key;
  dimensionDrag.startX = event.clientX - rect.left;
  dimensionDrag.startY = event.clientY - rect.top;
  dimensionDrag.startOffset.copy(dimensionOffsets[key]);
  controls.enabled = false;
  return true;
}

function updateDimensionDrag(event) {
  if (!dimensionDrag.active) return;
  const rect = renderer.domElement.getBoundingClientRect();
  const dx = (event.clientX - rect.left) - dimensionDrag.startX;
  const dy = (event.clientY - rect.top) - dimensionDrag.startY;
  const label = dimensionLabels[dimensionDrag.active];
  const distance = camera.position.distanceTo(label.position);
  const worldPerPixel = (2 * Math.tan(THREE.MathUtils.degToRad(camera.fov * 0.5)) * distance) / rect.height;

  const right = new THREE.Vector3(1, 0, 0).applyQuaternion(camera.quaternion);
  const up = new THREE.Vector3(0, 1, 0).applyQuaternion(camera.quaternion);
  const delta = right.multiplyScalar(dx * worldPerPixel).add(up.multiplyScalar(-dy * worldPerPixel));

  const normal = dimensionNormals[dimensionDrag.active];
  const offset = normal.clone().multiplyScalar(delta.dot(normal));
  dimensionOffsets[dimensionDrag.active]
    .copy(dimensionDrag.startOffset)
    .add(offset);

  updateDimensionHelpers();
}

function stopDimensionDrag() {
  if (!dimensionDrag.active) return;
  dimensionDrag.active = null;
  controls.enabled = true;
}

window.addEventListener('pointermove', (event) => {
  updateDimensionDrag(event);
  updateDimensionHover(event);
});

window.addEventListener('pointerup', (event) => {
  stopDimensionDrag();
  updateDimensionHover(event);
});

window.addEventListener('blur', () => {
  stopDimensionDrag();
});

['width', 'height', 'depth'].forEach((key) => {
  const el = dimensionLabels[key].element;
  el.addEventListener('dblclick', (event) => {
    event.preventDefault();
    event.stopPropagation();
    enableLabelEditing(key);
  });
  el.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      disableLabelEditing(true);
    }
    if (event.key === 'Escape') {
      event.preventDefault();
      disableLabelEditing(false);
    }
  });
  el.addEventListener('blur', () => {
    disableLabelEditing(true);
  });
});

// image control enablement
function updateImageControlsEnabled(enabled) {
  matchWidthBtn.disabled = !enabled;
  matchHeightBtn.disabled = !enabled;
}

function hasAnyImage() {
  return state.images.slice(0, state.imageCount).some((entry) => entry.image);
}

function getLayoutImages() {
  return state.images
    .slice(0, state.imageCount)
    .map((entry) => ({
      image: entry.image,
      rotation: entry.rotation,
      margin: entry.margin
    }));
}

function getActiveFiles() {
  return state.images
    .slice(0, state.imageCount)
    .map((entry) => entry.file)
    .filter(Boolean);
}

function getPrimaryImage() {
  const entry = state.images.find((img, index) => index < state.imageCount && img.image);
  return entry?.image ?? null;
}

function updateSlotVisibility() {
  imageSlots.forEach((slot, index) => {
    if (index < state.imageCount) {
      slot.classList.remove('hidden');
    } else {
      slot.classList.add('hidden');
    }
  });

  addImageSlotBottomBtn.disabled = state.imageCount >= 4;
}

function setImageCount(nextCount) {
  const count = Math.min(4, Math.max(1, nextCount));
  if (count === state.imageCount) return;
  if (count < state.imageCount) {
    for (let i = count; i < state.imageCount; i += 1) {
      const entry = state.images[i];
      if (entry?.image) {
        entry.image = null;
        entry.file = null;
      }
      if (currentImageObjectUrls[i]) {
        URL.revokeObjectURL(currentImageObjectUrls[i]);
        currentImageObjectUrls[i] = null;
      }
      const slot = imageSlots[i];
      if (slot) {
        const fileInput = slot.querySelector('.image-input');
        if (fileInput) fileInput.value = '';
      }
    }
  }
  state.imageCount = count;
  updateSlotVisibility();
  updateFrontTexture();
}

function removeImageSlot(index) {
  if (state.imageCount <= 1) {
    return;
  }
  for (let i = index; i < state.imageCount - 1; i += 1) {
    state.images[i] = { ...state.images[i + 1], margin: { ...state.images[i + 1].margin } };
    const fromSlot = imageSlots[i + 1];
    const toSlot = imageSlots[i];
    if (fromSlot && toSlot) {
      const toFile = toSlot.querySelector('.image-input');
      if (toFile) toFile.value = '';
      const fromRotation = fromSlot.querySelector('.rotation');
      const toRotation = toSlot.querySelector('.rotation');
      if (fromRotation && toRotation) {
        toRotation.value = fromRotation.value;
      }
      const fromMargins = {
        left: fromSlot.querySelector('.margin-left')?.value ?? 0,
        right: fromSlot.querySelector('.margin-right')?.value ?? 0,
        top: fromSlot.querySelector('.margin-top')?.value ?? 0,
        bottom: fromSlot.querySelector('.margin-bottom')?.value ?? 0
      };
      const toMargins = {
        left: toSlot.querySelector('.margin-left'),
        right: toSlot.querySelector('.margin-right'),
        top: toSlot.querySelector('.margin-top'),
        bottom: toSlot.querySelector('.margin-bottom')
      };
      if (toMargins.left) toMargins.left.value = fromMargins.left;
      if (toMargins.right) toMargins.right.value = fromMargins.right;
      if (toMargins.top) toMargins.top.value = fromMargins.top;
      if (toMargins.bottom) toMargins.bottom.value = fromMargins.bottom;
    }
  }

  const lastIndex = state.imageCount - 1;
  const last = state.images[lastIndex];
  if (last?.image) {
    last.image = null;
    last.file = null;
  }
  if (currentImageObjectUrls[lastIndex]) {
    URL.revokeObjectURL(currentImageObjectUrls[lastIndex]);
    currentImageObjectUrls[lastIndex] = null;
  }

  state.imageCount -= 1;
  const lastSlot = imageSlots[state.imageCount];
  if (lastSlot) {
    const fileInput = lastSlot.querySelector('.image-input');
    if (fileInput) fileInput.value = '';
  }

  updateSlotVisibility();
  updateFrontTexture();
}


function getLayoutGrid() {
  const count = Math.max(1, state.imageCount);
  let rows = 1;
  let cols = count;
  if (state.layout === 'vertical') {
    rows = count;
    cols = 1;
  } else if (state.layout === 'grid') {
    rows = 2;
    cols = 2;
  }
  return { rows, cols, count };
}

function getImageAspect(entry) {
  if (!entry?.image) return null;
  const rotation = Number(entry.rotation || 0) % 360;
  const rotated = rotation % 180 !== 0;
  const w = rotated ? entry.image.height : entry.image.width;
  const h = rotated ? entry.image.width : entry.image.height;
  if (!w || !h) return null;
  return w / h;
}

function getSlotMargins(index) {
  const margin = state.images[index]?.margin ?? {};
  return {
    left: Math.max(0, margin.left ?? 0),
    right: Math.max(0, margin.right ?? 0),
    top: Math.max(0, margin.top ?? 0),
    bottom: Math.max(0, margin.bottom ?? 0)
  };
}

function getMatchedHeight() {
  const active = state.images.slice(0, state.imageCount).filter((entry) => entry.image);
  if (active.length === 0) return state.height;

  if (state.layout === 'horizontal') {
    const sumAspects = active.reduce((sum, entry) => sum + (getImageAspect(entry) ?? 0), 0);
    const totalMarginsX = active.reduce((sum, entry) => {
      const m = getSlotMargins(state.images.indexOf(entry));
      return sum + m.left + m.right;
    }, 0);
    const maxMarginsY = active.reduce((max, entry) => {
      const m = getSlotMargins(state.images.indexOf(entry));
      return Math.max(max, m.top + m.bottom);
    }, 0);

    const targetH = (state.width - totalMarginsX) / Math.max(0.001, sumAspects);
    return Math.max(1, targetH + maxMarginsY);
  }

  if (state.layout === 'vertical') {
    let totalH = 0;
    active.forEach((entry) => {
      const index = state.images.indexOf(entry);
      const margins = getSlotMargins(index);
      const aspect = getImageAspect(entry) ?? 0.001;
      const innerW = Math.max(0.01, state.width - margins.left - margins.right);
      totalH += (innerW / aspect) + margins.top + margins.bottom;
    });
    return Math.max(1, totalH);
  }

  const { rows, cols } = getLayoutGrid();
  const slotW = state.width / cols;
  let requiredSlotH = 0;

  state.images.slice(0, state.imageCount).forEach((entry, index) => {
    const aspect = getImageAspect(entry);
    if (!aspect) return;
    const margins = getSlotMargins(index);
    const slotWEffective = Math.max(0.01, slotW - margins.left - margins.right);
    const neededH = (slotWEffective / aspect) + margins.top + margins.bottom;
    requiredSlotH = Math.max(requiredSlotH, neededH);
  });

  return Math.max(1, requiredSlotH * rows);
}

function getMatchedWidth() {
  const active = state.images.slice(0, state.imageCount).filter((entry) => entry.image);
  if (active.length === 0) return state.width;

  if (state.layout === 'horizontal') {
    const sumAspects = active.reduce((sum, entry) => sum + (getImageAspect(entry) ?? 0), 0);
    const totalMarginsX = active.reduce((sum, entry) => {
      const m = getSlotMargins(state.images.indexOf(entry));
      return sum + m.left + m.right;
    }, 0);
    const maxMarginsY = active.reduce((max, entry) => {
      const m = getSlotMargins(state.images.indexOf(entry));
      return Math.max(max, m.top + m.bottom);
    }, 0);
    const targetH = state.height - maxMarginsY;
    return Math.max(1, (targetH * Math.max(0.001, sumAspects)) + totalMarginsX);
  }

  if (state.layout === 'vertical') {
    const sumInvAspects = active.reduce((sum, entry) => {
      const aspect = getImageAspect(entry) ?? 0.001;
      return sum + (aspect > 0 ? 1 / aspect : 0);
    }, 0);
    const totalMarginsY = active.reduce((sum, entry) => {
      const m = getSlotMargins(state.images.indexOf(entry));
      return sum + m.top + m.bottom;
    }, 0);
    const maxMarginsX = active.reduce((max, entry) => {
      const m = getSlotMargins(state.images.indexOf(entry));
      return Math.max(max, m.left + m.right);
    }, 0);
    const targetW = (state.height - totalMarginsY) / Math.max(0.001, sumInvAspects);
    return Math.max(1, targetW + maxMarginsX);
  }

  const { rows, cols } = getLayoutGrid();
  const slotH = state.height / rows;
  let requiredSlotW = 0;

  state.images.slice(0, state.imageCount).forEach((entry, index) => {
    const aspect = getImageAspect(entry);
    if (!aspect) return;
    const margins = getSlotMargins(index);
    const slotHEffective = Math.max(0.01, slotH - margins.top - margins.bottom);
    const neededW = (slotHEffective * aspect) + margins.left + margins.right;
    requiredSlotW = Math.max(requiredSlotW, neededW);
  });

  return Math.max(1, requiredSlotW * cols);
}

function getLayoutSlotsInches() {
  const count = Math.max(1, state.imageCount);
  let rows = 1;
  let cols = count;
  if (state.layout === 'vertical') {
    rows = count;
    cols = 1;
  } else if (state.layout === 'grid') {
    rows = 2;
    cols = 2;
  }

  const slotW = state.width / cols;
  const slotH = state.height / rows;
  const slots = [];
  for (let r = 0; r < rows; r += 1) {
    for (let c = 0; c < cols; c += 1) {
      if (slots.length >= count) break;
      slots.push({ width: slotW, height: slotH });
    }
  }
  return slots;
}

function getSlotSize(index) {
  const slots = getLayoutSlotsInches();
  const base = slots[index] ?? { width: state.width, height: state.height };
  const margins = getSlotMargins(index);
  return {
    width: Math.max(0.01, base.width - margins.left - margins.right),
    height: Math.max(0.01, base.height - margins.top - margins.bottom)
  };
}


// chamfer helpers
function getChamferBevel() {
  if (!state.chamfer) {
    return 0;
  }
  const chamfer = Math.max(0.001, state.depth * 0.3);
  const maxChamfer = Math.min(state.width / 2, state.height / 2, state.depth / 2);
  return Math.min(chamfer, maxChamfer);
}

// printable area helpers
function getPrintableSize() {
  const bevel = getChamferBevel();
  return {
    width: Math.max(0.01, state.width - bevel * 2),
    height: Math.max(0.01, state.height - bevel * 2)
  };
}

// panel geometry with optional chamfer
function createPanelGeometry() {
  if (!state.chamfer) {
    if (!state.screwHoles) {
      return new THREE.BoxGeometry(state.width, state.height, state.depth);
    }

    const shape = createPanelShape({
      width: state.width,
      height: state.height,
      innerW: state.width,
      innerH: state.height,
      bevel: 0
    });
    const geometry = new THREE.ExtrudeGeometry(shape, {
      depth: state.depth,
      bevelEnabled: false,
      steps: 1,
      curveSegments: 24
    });
    geometry.center();
    return geometry;
  }

  const bevel = getChamferBevel();
  const printable = getPrintableSize();
  const innerW = printable.width;
  const innerH = printable.height;

  const shape = createPanelShape({
    width: state.width,
    height: state.height,
    innerW,
    innerH,
    bevel
  });

  const depth = Math.max(0.01, state.depth - bevel * 2);
  const geometry = new THREE.ExtrudeGeometry(shape, {
    depth,
    bevelEnabled: true,
    bevelSize: bevel,
    bevelThickness: bevel,
    bevelSegments: 1,
    steps: 1,
    curveSegments: 1
  });
  geometry.center();
  return geometry;
}

function createPanelShape({ width, height, innerW, innerH, bevel }) {
  const shape = new THREE.Shape();
  shape.moveTo(-innerW / 2, -innerH / 2);
  shape.lineTo(innerW / 2, -innerH / 2);
  shape.lineTo(innerW / 2, innerH / 2);
  shape.lineTo(-innerW / 2, innerH / 2);
  shape.closePath();

  addScrewHoles(shape, { width, height, innerW, innerH, bevel });
  return shape;
}

function addScrewHoles(shape, { width, height, innerW, innerH, bevel }) {
  if (!state.screwHoles) {
    return;
  }

  const centers = getScrewHoleCenters({ width, height, innerW, innerH });
  centers.forEach(({ x, y }) => {
    const hole = new THREE.Path();
    hole.absellipse(x, y, M4_RADIUS_IN, M4_RADIUS_IN, 0, Math.PI * 2, false, 0);
    shape.holes.push(hole);
  });
}

function getScrewHoleCenters({ width, height, innerW, innerH }) {
  if (!state.screwHoles) {
    return [];
  }

  const epsilon = 0.01;
  const maxCenterX = innerW / 2 - M4_RADIUS_IN - epsilon;
  const maxCenterY = innerH / 2 - M4_RADIUS_IN - epsilon;
  if (maxCenterX <= 0 || maxCenterY <= 0) {
    return [];
  }

  const desiredCenterX = width / 2 - SCREW_EDGE_OFFSET_IN;
  const desiredCenterY = height / 2 - SCREW_EDGE_OFFSET_IN;

  const centerX = Math.min(desiredCenterX, maxCenterX);
  const centerY = Math.min(desiredCenterY, maxCenterY);
  if (centerX <= 0 || centerY <= 0) {
    return [];
  }

  return [
    { x: centerX, y: centerY },
    { x: -centerX, y: centerY },
    { x: -centerX, y: -centerY },
    { x: centerX, y: -centerY }
  ];
}

// image plane creation
function createImagePlane() {
  const printable = getPrintableSize();
  const geometry = new THREE.PlaneGeometry(printable.width, printable.height);
  const plane = new THREE.Mesh(geometry, frontMaterial);
  plane.position.set(0, state.height / 2, state.depth / 2 + 0.01);
  return plane;
}

// image plane updates
function updateImagePlane() {
  if (!imagePlane) {
    return;
  }
  const printable = getPrintableSize();
  imagePlane.geometry.dispose();
  imagePlane.geometry = new THREE.PlaneGeometry(printable.width, printable.height);
  imagePlane.position.set(0, state.height / 2, state.depth / 2 + 0.01);
  imagePlane.visible = true;
}

// dimension line with arrowheads
function addDimensionLine(start, end, coneGeo) {
  const lineMaterial = new THREE.LineBasicMaterial({ color: DIMENSION_BASE_COLOR.clone() });
  const coneMaterial = new THREE.MeshBasicMaterial({ color: DIMENSION_BASE_COLOR.clone() });
  const lineGeom = new THREE.BufferGeometry().setFromPoints([start, end]);
  const line = new THREE.Line(lineGeom, lineMaterial);
  dimensionGroup.add(line);

  const dir = new THREE.Vector3().subVectors(end, start).normalize();
  const length = start.distanceTo(end);
  const arrowOffset = Math.min(length * 0.06, 0.6);

  const coneA = new THREE.Mesh(coneGeo, coneMaterial);
  coneA.position.copy(start).add(dir.clone().multiplyScalar(arrowOffset));
  coneA.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), dir.clone().negate());
  dimensionGroup.add(coneA);

  const coneB = new THREE.Mesh(coneGeo, coneMaterial);
  coneB.position.copy(end).add(dir.clone().multiplyScalar(-arrowOffset));
  coneB.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), dir);
  dimensionGroup.add(coneB);

  return { line, coneA, coneB, start: start.clone(), end: end.clone() };
}


function snapCameraToDirection(direction) {
  const dir = direction.clone().normalize();
  const target = new THREE.Vector3(0, state.height / 2, 0);
  const distance = camera.position.distanceTo(controls.target);
  const up = new THREE.Vector3(0, 1, 0);

  if (Math.abs(dir.y) > 0.9) {
    const epsilon = 0.001;
    const offset = new THREE.Vector3(0, dir.y * distance, epsilon);
    camera.position.copy(target).add(offset);
  } else {
    camera.position.copy(target).add(dir.multiplyScalar(distance));
  }

  camera.up.copy(up);
  camera.lookAt(target);
  controls.target.copy(target);
  controls.up.copy(up);
  controls.update();
}

// viewcube follows camera orientation directly
