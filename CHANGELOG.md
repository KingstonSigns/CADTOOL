# Changelog

All notable changes to this project will be documented in this file.

## [Unreleased] - 2026-02-08
### Changed
- Refactored `client/src/main.js` to dispose old textures and dimension helper geometries/materials to prevent leaks.
- Added object URL lifecycle management for image uploads to avoid dangling blob URLs.
- Clamped `matchWidth`/`matchHeight` calculations using existing parsing bounds to prevent invalid dimensions.
- Used `parseDimension` fallback behavior for blank/invalid inputs to keep state stable.
- Added optional M4 screwholes positioned 0.5 in from panel edges, with UI toggle.
- Ensured front image plane preserves aspect ratio while showing screwholes via alpha mask.
- Added viewcube overlay for camera snapping using Three.js `ViewHelper`.
- Export now always includes screwholes (regardless of UI toggle) and normalizes export geometry.
