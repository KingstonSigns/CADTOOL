# Technical Overview

## Repository Layout
- `client/` frontend app
- `client/index.html` layout and UI markup
- `client/src/main.js` scene, UI wiring, geometry logic
- `client/src/texture.js` image fitting and canvas textures
- `client/src/export.js` STL + ZIP export
- `client/src/styles.css` CAD-style layout and theming
- `server/` backend scaffold
- `server/index.js` express entry
- `server/routes/` placeholder routes
- `server/controllers/` stub handlers
- `server/storage/` placeholder adapters

## Runtime Architecture
Vite serves the frontend during development. Three.js renders the scene in a WebGL canvas inside `#viewport`, while UI inputs update shared state and trigger geometry and texture updates. A front image plane is rendered on top of the panel mesh to preview the printable face, and STL output is exported from the mesh geometry before being zipped with metadata and image files.

## Dependencies
- `three` core renderer
- `three/examples` helpers
- `OrbitControls` for camera navigation
- `ViewHelper` for viewcube snapping and drag
- `CSS2DRenderer` for dimension labels
- `STLExporter` for mesh export
- `jszip` for packaging assets into a zip
- `vite` for local dev and bundling

## Key Functions and Logic
- `updateFrontTexture` builds the image texture and hole alpha mask, then applies them to the front face material
- `createLayoutTexture` renders images into a high resolution canvas based on face size and image count
- `computePlacements`, `computeHorizontalPlacements`, `computeVerticalPlacements`, `computeGridPlacements` compute the layout slots in pixels
- `createHoleMaskTexture` draws the screwholes into a mask that cuts the printable plane
- `createPanelGeometry`, `createPanelShape`, `addScrewHoles`, `getScrewHoleCenters` build the panel mesh with optional holes
- `getMatchedWidth`, `getMatchedHeight` compute proportional panel sizing for the primary image
- `openHelp`, `closeHelp` show and hide the help overlay
- `tryStartDimensionDrag`, `updateDimensionDrag`, `stopDimensionDrag` handle drag offsets for dimension labels
- `pickDimensionHover`, `applyDimensionHoverColors` control hover highlighting
- `enableLabelEditing`, `disableLabelEditing`, `applyDimensionFromLabel` manage inline label editing
- `forwardViewportEvent` forwards overlay input to the canvas for orbit controls
- `exportZip` packages stl, metadata, and image files

## Scene Graph
The scene contains a perspective `camera` targeting the panel centre, multiple lights, an infinite grid plane using a shader material, the panel mesh, and a front image plane for the printable face preview with an alpha mask for holes. Dimension helpers are drawn with CSS2D labels and line geometry, and the viewcube overlay is provided by Three.js `ViewHelper`.

## Geometry Pipeline
When chamfering is off, base geometry uses `BoxGeometry`. With chamfering enabled, the panel is built from `ExtrudeGeometry` with `bevelEnabled`. Optional screwholes are cut into the panel geometry by adding `Shape` holes before extrusion. Chamfer size follows `depth * 0.3`, clamped to half of width, height, and depth. Geometry is centred and positioned so the base sits at `y = 0`.

## Printable Face
- the printable face is a separate plane that sits slightly above the front surface
- its size is the panel width and height minus `2 * chamfer` on each axis
- the plane is always visible so a blank printable face remains when no image is loaded
- screwholes are shown by applying an alpha mask (holes cut out of the plane)

## Image Mapping
Images are drawn into a canvas for aspect-aware fitting across multi-image layouts. Margins are applied in inches and converted to pixels relative to face size, and the fitted layout is converted to a `CanvasTexture`. The canvas background is filled white to avoid dark gaps.

## Texture Resolution
Canvas size scales with face size and image count, then clamps to the GPU maximum texture size. Target pixels per inch is set in `updateFrontTexture` and passed into `createLayoutTexture`, and the hole mask uses the same resolution rules to keep holes aligned with the main texture.

## Layout Mathematics
- aspect ratio for each image uses its rotated dimensions
- margins are converted from inches to pixels

$$
a_i = \frac{w_i}{h_i}
$$

$$
left_{px} = \frac{m_{left}}{W_{face}} \cdot W_{canvas}, \quad
top_{px} = \frac{m_{top}}{H_{face}} \cdot H_{canvas}
$$

- horizontal layout target height

$$
H_t = \min\left(H_{max}, \frac{W_{canvas} - \sum m_x}{\sum a_i}\right)
$$

- vertical layout target width

$$
W_t = \min\left(W_{max}, \frac{H_{canvas} - \sum m_y}{\sum (1 / a_i)}\right)
$$

- chamfer depth clamp

$$
c = \min\left(0.3d, \frac{w}{2}, \frac{h}{2}, \frac{d}{2}\right)
$$

- texture resolution scaling with image count

$$
W_{desired} = \max\left(S_{base}, W_{face} \cdot ppi \cdot \sqrt{n}\right)
$$

$$
W_{canvas} = \min\left(W_{max}, W_{desired}\right), \quad
H_{canvas} = \left\lfloor \frac{W_{canvas}}{W_{face} / H_{face}} \right\rceil
$$

## Dimension Controls
Width, height, and depth are validated and clamped, with defaults set in `index.html`. Maximum height is 35 in, depth range is 0.1 to 1 in with a 0.1 step, and dimension edits update geometry immediately.

## Dimension Interaction
Dimension labels can be dragged to offset their measurement lines. Dragging is constrained to the axis normal that keeps the line parallel to its measured direction, and hover states highlight the line and label. Double-clicking a label enables inline editing, where pressing enter commits a new value and escape cancels. While labels are interactive, overlay input is forwarded to the WebGL canvas so orbit controls continue to work, and wheel events on the viewport are prevented from scrolling the page.

## Chamfer
The chamfer toggle adds a 45 degree chamfer on all edges. Chamfer depth is computed from current panel depth, the printable area shrinks to match the chamfered face, and STL export includes chamfered geometry.

## Screwholes
The screwholes toggle shows or hides four M4 holes. Hole centres are 0.5 in from the panel edges, clamped inward if the printable area is too small. Hole diameter is 4 mm (`4 / 25.4` in).

## Help Overlay
- help is shown on load and can be opened from the panel header
- overlay closes when the user clicks outside the modal or presses escape
- content scrolls within the modal body

## Infinite Grid
A shader-based plane creates an infinite grid illusion. Minor and major lines are shaded independently, and distance fade reduces intensity over range.

## Dimension Labels
- CSS2D labels show width, height, and depth
- lines with arrowheads are drawn in scene space
- labels track panel updates and remain aligned

## Export Pipeline
`STLExporter` serialises the mesh geometry. `metadata.txt` includes width, height, depth, the chamfer enabled flag, chamfer angle and chamfer depth, plus image filenames and a timestamp. `JSZip` packages the STL, metadata, and image files, and exports always include screwholes regardless of the UI toggle.

## Panel UI Behaviour
The main panel can collapse to a floating header box, and each section can collapse independently. Panel collapse does not affect the scene renderer. The help overlay opens on load and via the help button, and clicking outside the help card dismisses it.

## Backend Scaffold
- express app with placeholder routes
- intended endpoints
- `POST /api/uploads` for image uploads
- `POST /api/exports` for STL and metadata persistence
- no runtime dependency in the frontend

## Development
- run from `client/`
- `npm install`
- `npm run dev`

## Known Limitations
- STL does not embed textures
- no backend storage yet
- no advanced manufacturing validation
