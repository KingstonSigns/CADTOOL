# Versioned Export Metadata (2026-02-09)

Add a small, structured metadata file to the ZIP export that includes a `schemaVersion`. This enables future changes to the export format without breaking older exports or any downstream tooling. The app currently exports a ZIP containing `panel.stl`, `metadata.txt` (dimensions, chamfer details, image filenames, timestamp), and image files. The proposed change is to add a `metadata.json` file to the ZIP export alongside the existing `metadata.txt`.

Example shape:

```json
{
  "schemaVersion": 1,
  "dimensions": { "widthIn": 30, "heightIn": 10, "depthIn": 0.2 },
  "chamfer": { "enabled": false, "angleDeg": 45, "depthIn": 0.06 },
  "screwHoles": { "enabled": true, "diameterIn": 0.1575, "offsetIn": 0.5 },
  "images": [
    { "filename": "image-1.png", "rotationDeg": 0, "marginsIn": { "left": 0, "right": 0, "top": 0, "bottom": 0 } }
  ],
  "layout": { "mode": "horizontal" },
  "exportedAt": "2026-02-09T00:00:00.000Z"
}
```

Benefits include explicit versioning via `schemaVersion`, machine-readable metadata for downstream workflows, and backward compatibility by keeping `metadata.txt` for existing consumers. Start with `schemaVersion: 1` and increment only when making breaking changes to the JSON schema; optional fields can be added without breaking older parsers.
