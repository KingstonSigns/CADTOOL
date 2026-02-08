# Project: Web Three Interface (Signage Panel Configurator)

## Overview
A browser-based 3D configurator that lets users create a signage panel by adjusting dimensions (width/height/depth), uploading a front-face image, optionally chamfering edges, previewing in a CAD-style Three.js environment, and exporting an STL with a metadata text file and image bundled into a ZIP. A backend scaffold exists for future storage and processing.

## Current Capabilities
- Full-screen 3D environment with a right-side control panel.
- Panel dimensions with constraints and input validation.
- Optional 45° chamfer using 30% of depth.
- Image upload mapped to the printable face area.
- Padding controls with aspect-lock behavior.
- “Match Width/Height to Image” proportional sizing.
- Collapsible panel and collapsible sections.
- Infinite grid with distance fade for CAD-like feel.
- STL + image + metadata ZIP export.

## Goals
- Clear, responsive 3D preview with CAD aesthetics.
- Accurate printable face preview even with chamfers.
- Clean export package for downstream use.
- Backend-ready structure without implementation coupling.

## Non-Goals (Phase 1)
- Authentication, user accounts, or billing.
- Persistent backend storage (stubbed only).
- Manufacturing-specific validation beyond basic dimension checks.

## Implementation Summary
### Frontend
- Three.js scene, camera, lights, and OrbitControls.
- Panel mesh geometry with optional chamfer.
- Separate image plane sized to printable area.
- Canvas-based texture fitting with padding support.
- UI controls for dimensions, image, padding, chamfer, export.
- Export via STLExporter + JSZip.

### Backend Scaffold
- `server/` folder with Express app and placeholder routes.
- Intended endpoints for future uploads and export persistence.

## Tools & Dependencies
### Frontend
- `three` for 3D rendering and STL export.
- `jszip` for ZIP packaging.
- `vite` for dev server and build.

### Backend (Scaffold Only)
- `node` + `express` placeholders.

## Architecture
- `client/`
  - `index.html` UI layout
  - `src/main.js` scene, UI wiring, geometry logic
  - `src/texture.js` image fitting and canvas texture
  - `src/export.js` STL + ZIP export
  - `src/styles.css` CAD styling

- `server/` (scaffold)
  - `index.js` app entry
  - `routes/` API placeholders
  - `controllers/` stub handlers
  - `storage/` future adapters

## Milestones
1. Core 3D preview and UI scaffold.
2. Image mapping + padding + proportional sizing.
3. Chamfered geometry support.
4. Export package with full metadata.
5. Backend integration (future).

## Testing
- Manual QA for geometry changes, chamfer, image mapping, and export ZIP contents.
- Smoke checks in Chrome, Safari, and Firefox.

## Notes
- STL does not encode textures; the image is included separately in the ZIP.
- Metadata includes dimensions, padding, and chamfer details.
