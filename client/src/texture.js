// three js texture utilities
import * as THREE from 'three';

// base canvas size for textures
const BASE_SIZE = 1024;
// target pixels per inch for the panel face
const TARGET_PPI = 200;
// cap to keep gpu memory reasonable
const DEFAULT_MAX_SIZE = 4096;

// compute canvas size based on face aspect
function getCanvasSize(faceWidth, faceHeight, options = {}) {
  if (faceWidth <= 0 || faceHeight <= 0) {
    return { width: BASE_SIZE, height: BASE_SIZE };
  }

  const maxSize = Math.max(
    BASE_SIZE,
    Math.min(options.maxSize ?? DEFAULT_MAX_SIZE, options.maxSize ?? DEFAULT_MAX_SIZE)
  );
  const ppi = Math.max(50, options.ppi ?? TARGET_PPI);
  const countScale = Math.min(2, Math.sqrt(Math.max(1, options.count ?? 1)));
  const desiredW = Math.max(BASE_SIZE, Math.round(faceWidth * ppi * countScale));
  const desiredH = Math.max(BASE_SIZE, Math.round(faceHeight * ppi * countScale));

  const aspect = faceWidth / faceHeight;
  if (aspect >= 1) {
    let width = Math.min(maxSize, desiredW);
    let height = Math.max(1, Math.round(width / aspect));
    if (height > maxSize) {
      height = maxSize;
      width = Math.max(1, Math.round(height * aspect));
    }
    return { width, height };
  }
  let height = Math.min(maxSize, desiredH);
  let width = Math.max(1, Math.round(height * aspect));
  if (width > maxSize) {
    width = maxSize;
    height = Math.max(1, Math.round(width / aspect));
  }
  return { width, height };
}

export function createHoleMaskTexture(faceWidth, faceHeight, holes, options) {
  const { width, height } = getCanvasSize(faceWidth, faceHeight, options);
  const canvas = document.createElement('canvas');
  canvas.width = width;
  canvas.height = height;

  const ctx = canvas.getContext('2d');
  ctx.imageSmoothingEnabled = true;
  ctx.imageSmoothingQuality = 'high';
  ctx.fillStyle = '#ffffff';
  ctx.fillRect(0, 0, width, height);

  if (Array.isArray(holes)) {
    ctx.fillStyle = '#000000';
    holes.forEach((hole) => {
      const xPx = width / 2 + (hole.x / faceWidth) * width;
      const yPx = height / 2 - (hole.y / faceHeight) * height;
      const rX = (hole.r / faceWidth) * width;
      const rY = (hole.r / faceHeight) * height;
      ctx.beginPath();
      ctx.ellipse(xPx, yPx, rX, rY, 0, 0, Math.PI * 2);
      ctx.fill();
    });
  }

  const texture = new THREE.CanvasTexture(canvas);
  texture.colorSpace = THREE.SRGBColorSpace;
  texture.wrapS = THREE.ClampToEdgeWrapping;
  texture.wrapT = THREE.ClampToEdgeWrapping;
  texture.needsUpdate = true;
  return texture;
}

export function createLayoutTexture(images, faceWidth, faceHeight, options) {
  const { width, height } = getCanvasSize(faceWidth, faceHeight, {
    maxSize: options?.maxSize,
    ppi: options?.ppi,
    count: options?.count ?? images?.length ?? 1
  });
  const canvas = document.createElement('canvas');
  canvas.width = width;
  canvas.height = height;

  const ctx = canvas.getContext('2d');
  ctx.imageSmoothingEnabled = true;
  ctx.imageSmoothingQuality = 'high';
  ctx.fillStyle = '#ffffff';
  ctx.fillRect(0, 0, width, height);

  if (!Array.isArray(images) || images.length === 0) {
    const texture = new THREE.CanvasTexture(canvas);
    texture.colorSpace = THREE.SRGBColorSpace;
    return texture;
  }

  const layout = options?.layout ?? 'horizontal';

  const placements = computePlacements(images, layout, width, height, faceWidth, faceHeight);
  placements.forEach((placement) => {
    const { entry, x, y, width: slotW, height: slotH } = placement;
    if (!entry?.image) return;

    const contentW = Math.max(1, slotW);
    const contentH = Math.max(1, slotH);

    const imgW = entry.image.width;
    const imgH = entry.image.height;
    const rotation = Number(entry.rotation || 0) % 360;
    const rotated = rotation % 180 !== 0;
    const rotW = rotated ? imgH : imgW;
    const rotH = rotated ? imgW : imgH;
    const scale = Math.min(contentW / rotW, contentH / rotH);
    const drawW = imgW * scale;
    const drawH = imgH * scale;

    const centerX = x + slotW / 2;
    const centerY = y + slotH / 2;

    ctx.save();
    ctx.translate(centerX, centerY);
    ctx.rotate((rotation * Math.PI) / 180);
    ctx.drawImage(entry.image, -drawW / 2, -drawH / 2, drawW, drawH);
    ctx.restore();
  });

  const texture = new THREE.CanvasTexture(canvas);
  texture.colorSpace = THREE.SRGBColorSpace;
  texture.wrapS = THREE.ClampToEdgeWrapping;
  texture.wrapT = THREE.ClampToEdgeWrapping;
  texture.needsUpdate = true;
  return texture;
}

function computePlacements(images, layout, canvasW, canvasH, faceW, faceH) {
  if (layout === 'vertical') {
    return computeVerticalPlacements(images, canvasW, canvasH, faceW, faceH);
  }
  if (layout === 'grid') {
    return computeGridPlacements(images, canvasW, canvasH, faceW, faceH);
  }
  return computeHorizontalPlacements(images, canvasW, canvasH, faceW, faceH);
}

function getMarginsPx(entry, faceW, faceH, canvasW, canvasH) {
  const margin = entry.margin ?? { left: 0, right: 0, top: 0, bottom: 0 };
  const leftPx = faceW > 0 ? (Math.max(0, margin.left) / faceW) * canvasW : 0;
  const rightPx = faceW > 0 ? (Math.max(0, margin.right) / faceW) * canvasW : 0;
  const topPx = faceH > 0 ? (Math.max(0, margin.top) / faceH) * canvasH : 0;
  const bottomPx = faceH > 0 ? (Math.max(0, margin.bottom) / faceH) * canvasH : 0;
  return { leftPx, rightPx, topPx, bottomPx };
}

function getImageAspect(entry) {
  if (!entry?.image) return 1;
  const rotation = Number(entry.rotation || 0) % 360;
  const rotated = rotation % 180 !== 0;
  const w = rotated ? entry.image.height : entry.image.width;
  const h = rotated ? entry.image.width : entry.image.height;
  if (!w || !h) return 1;
  return w / h;
}

function computeHorizontalPlacements(images, canvasW, canvasH, faceW, faceH) {
  const count = images.length;
  if (count === 0) return [];

  const margins = images.map((entry) => getMarginsPx(entry, faceW, faceH, canvasW, canvasH));
  const totalMarginsX = margins.reduce((sum, m) => sum + m.leftPx + m.rightPx, 0);
  const maxInnerHeight = Math.max(1, Math.min(...margins.map((m) => canvasH - m.topPx - m.bottomPx)));
  const aspects = images.map((entry) => getImageAspect(entry));
  const sumAspects = aspects.reduce((sum, a) => sum + a, 0);
  const availableW = Math.max(1, canvasW - totalMarginsX);
  const targetH = Math.min(maxInnerHeight, availableW / Math.max(0.001, sumAspects));

  let cursorX = 0;
  const placements = [];
  for (let i = 0; i < count; i += 1) {
    const margin = margins[i];
    const width = Math.max(1, aspects[i] * targetH);
    const innerHeight = Math.max(1, canvasH - margin.topPx - margin.bottomPx);
    const y = margin.topPx + (innerHeight - targetH) / 2;
    const x = cursorX + margin.leftPx;
    placements.push({ entry: images[i], x, y, width, height: targetH });
    cursorX += margin.leftPx + width + margin.rightPx;
  }
  return placements;
}

function computeVerticalPlacements(images, canvasW, canvasH, faceW, faceH) {
  const count = images.length;
  if (count === 0) return [];

  const margins = images.map((entry) => getMarginsPx(entry, faceW, faceH, canvasW, canvasH));
  const totalMarginsY = margins.reduce((sum, m) => sum + m.topPx + m.bottomPx, 0);
  const maxInnerWidth = Math.max(1, Math.min(...margins.map((m) => canvasW - m.leftPx - m.rightPx)));
  const aspects = images.map((entry) => getImageAspect(entry));
  const sumInvAspects = aspects.reduce((sum, a) => sum + (a > 0 ? 1 / a : 0), 0);
  const availableH = Math.max(1, canvasH - totalMarginsY);
  const targetW = Math.min(maxInnerWidth, availableH / Math.max(0.001, sumInvAspects));

  let cursorY = 0;
  const placements = [];
  for (let i = 0; i < count; i += 1) {
    const margin = margins[i];
    const height = Math.max(1, targetW / Math.max(0.001, aspects[i]));
    const innerWidth = Math.max(1, canvasW - margin.leftPx - margin.rightPx);
    const x = margin.leftPx + (innerWidth - targetW) / 2;
    const y = cursorY + margin.topPx;
    placements.push({ entry: images[i], x, y, width: targetW, height });
    cursorY += margin.topPx + height + margin.bottomPx;
  }
  return placements;
}

function computeGridPlacements(images, canvasW, canvasH, faceW, faceH) {
  const slots = [];
  const rows = 2;
  const cols = 2;
  const slotW = canvasW / cols;
  const slotH = canvasH / rows;
  for (let i = 0; i < images.length; i += 1) {
    const r = Math.floor(i / cols);
    const c = i % cols;
    const entry = images[i];
    const margin = getMarginsPx(entry, faceW, faceH, canvasW, canvasH);
    const innerW = Math.max(1, slotW - margin.leftPx - margin.rightPx);
    const innerH = Math.max(1, slotH - margin.topPx - margin.bottomPx);
    const x = c * slotW + margin.leftPx;
    const y = r * slotH + margin.topPx;
    slots.push({ entry, x, y, width: innerW, height: innerH });
  }
  return slots;
}
