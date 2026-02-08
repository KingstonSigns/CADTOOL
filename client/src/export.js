// stl export and zip packaging
import { STLExporter } from 'three/examples/jsm/exporters/STLExporter.js';
import JSZip from 'jszip';

// trigger a browser download
function downloadBlob(blob, filename) {
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = filename;
  link.click();
  URL.revokeObjectURL(url);
}

// build and download the export zip
export async function exportZip({ mesh, dimensions, imageFiles, chamfer }) {
  const exporter = new STLExporter();
  const stlString = exporter.parse(mesh, { binary: false });
  const stlBlob = new Blob([stlString], { type: 'model/stl' });

  // build metadata for the text file
  const chamferEnabled = Boolean(chamfer?.enabled);
  const chamferDepth = chamferEnabled ? chamfer.depth : 0;
  const metadata = [
    `width_in=${dimensions.width}`,
    `height_in=${dimensions.height}`,
    `depth_in=${dimensions.depth}`,
    `pad_x_in=${dimensions.padX ?? 0}`,
    `pad_y_in=${dimensions.padY ?? 0}`,
    `chamfer_enabled=${chamferEnabled}`,
    `chamfer_angle_deg=${chamferEnabled ? 45 : 0}`,
    `chamfer_depth_in=${chamferDepth}`,
    `image_filenames=${imageFiles?.length ? imageFiles.map((file) => file.name).join(',') : 'none'}`,
    `generated_at=${new Date().toISOString()}`
  ].join('\n');

  // assemble zip contents
  const zip = new JSZip();
  zip.file('panel.stl', stlBlob);
  zip.file('metadata.txt', metadata);

  if (Array.isArray(imageFiles)) {
    imageFiles.forEach((file) => {
      if (file) {
        zip.file(`image_${file.name}`, file);
      }
    });
  }

  const zipBlob = await zip.generateAsync({ type: 'blob' });
  downloadBlob(zipBlob, 'panel_export.zip');
}
