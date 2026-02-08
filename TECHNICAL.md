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
- Vite serves the frontend during development
- Three.js renders the scene in a WebGL canvas inside `#viewport`
- UI inputs update shared state and trigger geometry and texture updates
- A front image plane is rendered on top of the panel mesh
- STL is exported from the mesh geometry and zipped with metadata and image

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
- `exportZip` packages stl, metadata, and image files

## Scene Graph
- `scene`
- `camera` perspective camera targeting the panel center
- lights
- infinite grid plane using a shader material
- panel mesh
- image plane for printable face preview (with alpha mask for holes)
- dimension helpers using CSS2D labels and line geometry
- viewcube overlay using Three.js `ViewHelper`

## Geometry Pipeline
- base geometry uses `BoxGeometry` when chamfer is off
- chamfer uses `ExtrudeGeometry` with `bevelEnabled`
- optional screwholes are cut into the panel geometry with `Shape` + `ExtrudeGeometry`
- chamfer size is `depth * 0.3` and clamped to half of width, height, and depth
- geometry is centered and then positioned so its base sits at `y = 0`

## Printable Face
- the printable face is a separate plane that sits slightly above the front surface
- its size is the panel width and height minus `2 * chamfer` on each axis
- the plane is always visible so a blank printable face remains when no image is loaded
- screwholes are shown by applying an alpha mask (holes cut out of the plane)

## Image Mapping
- images are drawn into a canvas for aspect-aware fitting and multi-image layouts
- margins are applied in inches and converted to pixels relative to face size
- the fitted layout is converted to a `CanvasTexture`
- background fill is white to avoid dark gaps

## Texture Resolution
- canvas size scales with face size and image count, clamped to the gpu max texture size
- target pixels per inch set in `updateFrontTexture` and passed into `createLayoutTexture`
- hole mask uses the same resolution rules to keep holes aligned with the main texture

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
- width, height, and depth are validated and clamped
- defaults are set in `index.html`
- max height is 35 in
- depth range is 0.1 to 1 in with 0.1 step
- dimension edits update geometry immediately

## Chamfer
- toggle adds a 45 degree chamfer on all edges
- chamfer depth is computed from current panel depth
- printable area shrinks to match chamfered face
- STL export includes chamfered geometry

## Screwholes
- toggle shows/hides four M4 holes
- hole centers are 0.5 in from the panel edges (clamped inward if the printable area is too small)
- hole diameter is 4 mm (`4 / 25.4` in)

## Help Overlay
- help is shown on load and can be opened from the panel header
- overlay closes when the user clicks outside the modal or presses escape
- content scrolls within the modal body

## Infinite Grid
- shader-based plane creates an infinite grid illusion
- minor and major lines are shaded independently
- distance fade reduces intensity over range

## Dimension Labels
- CSS2D labels show width, height, and depth
- lines with arrowheads are drawn in scene space
- labels track panel updates and remain aligned

## Export Pipeline
- `STLExporter` serializes the mesh geometry
- `metadata.txt` includes
- width, height, depth
- chamfer enabled flag
- chamfer angle and chamfer depth
- image filenames and timestamp
- `JSZip` packages STL, metadata, and image files
- exports always include screwholes, regardless of UI toggle

## Panel UI Behavior
- main panel can collapse to a floating header box
- each section can collapse independently
- panel collapse does not affect the scene renderer
- help overlay opens on load and via the help button
- clicking outside the help card dismisses it

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
