// three js texture utilities
import * as THREE from 'three';

// base canvas size for textures
const BASE_SIZE = 1024;

// compute canvas size based on face aspect
function getCanvasSize(faceWidth, faceHeight) {
  if (faceWidth <= 0 || faceHeight <= 0) {
    return { width: BASE_SIZE, height: BASE_SIZE };
  }

  const aspect = faceWidth / faceHeight;
  if (aspect >= 1) {
    return { width: BASE_SIZE, height: Math.round(BASE_SIZE / aspect) };
  }
  return { width: Math.round(BASE_SIZE * aspect), height: BASE_SIZE };
}

export function createFittedTexture(image, faceWidth, faceHeight, padding) {
  const { width, height } = getCanvasSize(faceWidth, faceHeight);
  // draw image into a canvas to control fitting
  const canvas = document.createElement('canvas');
  canvas.width = width;
  canvas.height = height;

  const ctx = canvas.getContext('2d');
  // fill background so any padding is white
  ctx.fillStyle = '#ffffff';
  ctx.fillRect(0, 0, width, height);

  // compute padding in pixels relative to face size
  const padX = Math.max(0, padding?.x ?? 0);
  const padY = Math.max(0, padding?.y ?? 0);
  const padXpx = faceWidth > 0 ? (padX / faceWidth) * width : 0;
  const padYpx = faceHeight > 0 ? (padY / faceHeight) * height : 0;
  const contentW = Math.max(1, width - padXpx * 2);
  const contentH = Math.max(1, height - padYpx * 2);

  const imgW = image.width;
  const imgH = image.height;
  // scale to fit within printable bounds
  const scale = Math.min(contentW / imgW, contentH / imgH);

  const drawW = imgW * scale;
  const drawH = imgH * scale;
  const offsetX = padXpx + (contentW - drawW) / 2;
  const offsetY = padYpx + (contentH - drawH) / 2;

  // draw the fitted image
  ctx.drawImage(image, offsetX, offsetY, drawW, drawH);

  // create a three js texture from the canvas
  const texture = new THREE.CanvasTexture(canvas);
  texture.colorSpace = THREE.SRGBColorSpace;
  texture.wrapS = THREE.ClampToEdgeWrapping;
  texture.wrapT = THREE.ClampToEdgeWrapping;
  texture.needsUpdate = true;
  return texture;
}
