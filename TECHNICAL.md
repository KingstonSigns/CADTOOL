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

## Scene Graph
- `scene`
- `camera` perspective camera targeting the panel center
- lights
- infinite grid plane using a shader material
- panel mesh
- image plane for printable face preview
- dimension helpers using CSS2D labels and line geometry

## Geometry Pipeline
- base geometry uses `BoxGeometry` when chamfer is off
- chamfer uses `ExtrudeGeometry` with `bevelEnabled`
- chamfer size is `depth * 0.3` and clamped to half of width, height, and depth
- geometry is centered and then positioned so its base sits at `y = 0`

## Printable Face
- the printable face is a separate plane that sits slightly above the front surface
- its size is the panel width and height minus `2 * chamfer` on each axis
- the plane is always visible so a blank printable face remains when no image is loaded

## Image Mapping
- image is drawn into a canvas for aspect-aware fitting
- padding is applied in inches and converted to pixels relative to face size
- the fitted image is converted to a `CanvasTexture`
- background fill is white to avoid dark gaps

## Padding Logic
- horizontal and vertical padding are linked to maintain image aspect ratio
- users can edit either padding axis and the other updates
- a reset action forces one axis to zero based on aspect
- near-zero padding is snapped to zero to avoid tiny gaps

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
- pad x and pad y values
- chamfer enabled flag
- chamfer angle and chamfer depth
- image filename and timestamp
- `JSZip` packages STL, metadata, and image file

## Panel UI Behavior
- main panel can collapse to a floating header box
- each section can collapse independently
- panel collapse does not affect the scene renderer

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
