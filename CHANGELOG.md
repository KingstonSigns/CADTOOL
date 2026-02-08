# Changelog

All notable changes to this project will be documented in this file.

## [Unreleased] - 2026-02-08
### Changed
- Refactored `client/src/main.js` to dispose old textures and dimension helper geometries/materials to prevent leaks
- Added object URL lifecycle management for image uploads to avoid dangling blob URLs
- Clamped `matchWidth`/`matchHeight` calculations using existing parsing bounds to prevent invalid dimensions
- Used `parseDimension` fallback behavior for blank/invalid inputs to keep state stable
- Added optional M4 screwholes positioned 0.5 in from panel edges, with UI toggle
- Ensured front image plane preserves aspect ratio while showing screwholes via alpha mask
- Added viewcube overlay for camera snapping using Three.js `ViewHelper`
- Export now always includes screwholes (regardless of UI toggle) and normalizes export geometry
- Increased image texture resolution based on face size and image count for sharper multi-image output
- Removed per-image match scaling logic and kept match width/height at the panel level only
- Added a help overlay modal with a help button and click-outside dismissal
- Added draggable dimension labels constrained to axis-aligned offsets, with hover highlights and inline editing
- Forwarded input events through the label overlay to keep orbit controls responsive
- Prevented browser scrolling while zooming in the 3d viewport
### Added
- multi-image support (up to 4 images) with per-slot uploads
- dynamic horizontal/vertical layout that sizes images based on their aspect ratio
- grid layout option (2x2)
- per-image rotation controls (0/90/180/270/360)
- per-image margins (left/right/top/bottom) with nested margins panel
- add/remove image slot controls
- per-slot advanced panels collapsed by default
- export bundles all active images and lists filenames in metadata
- help modal content for navigation controls, viewcube usage, and panel workflow
- higher quality canvas drawing for the image texture
- dimension label drag and edit interactions

### Removed
- single-image upload flow and its padding controls
- global/per-slot padding modes and padding reset logic

### Functions and Logic Touched
- `updateFrontTexture`, `createLayoutTexture`, `createHoleMaskTexture` for higher resolution textures and alpha masking
- `getMatchedWidth`, `getMatchedHeight`, `parseDimension` for panel sizing behavior
- `createPanelGeometry`, `createPanelShape`, `addScrewHoles`, `getScrewHoleCenters` for geometry with screwholes
- `exportZip` for bundling stl, metadata, and images
- `openHelp`, `closeHelp` for help overlay behavior
- `tryStartDimensionDrag`, `updateDimensionDrag`, `stopDimensionDrag`, `pickDimensionHover` for dimension label interactions
- `enableLabelEditing`, `disableLabelEditing`, `applyDimensionFromLabel` for inline dimension edits
- `forwardViewportEvent` for input forwarding on the label overlay
