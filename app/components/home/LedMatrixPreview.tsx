import { useCallback } from 'react';

import MatrixCanvas from '../board/MatrixCanvas';

const RAINBOW = ['#ff3b30', '#ff9500', '#ffcc00', '#34c759', '#00c7ff', '#5856d6', '#bf5af2'];
const TEXT = 'LED Matrix';
const MARGIN = 0.1;
const REFERENCE_SIZE = 100;

export default function LedMatrixPreview({ className }: { className?: string }) {
  const draw = useCallback((ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement) => {
    ctx.font = `bold ${REFERENCE_SIZE}px sans-serif`;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'alphabetic';
    const reference = ctx.measureText(TEXT);
    const referenceHeight = reference.actualBoundingBoxAscent + reference.actualBoundingBoxDescent;

    const maxWidth = canvas.width * (1 - MARGIN * 2);
    const maxHeight = canvas.height * (1 - MARGIN * 2);
    const size = REFERENCE_SIZE * Math.min(maxWidth / reference.width, maxHeight / referenceHeight);

    ctx.font = `bold ${size}px sans-serif`;
    const metrics = ctx.measureText(TEXT);
    const height = metrics.actualBoundingBoxAscent + metrics.actualBoundingBoxDescent;
    const centerX = canvas.width / 2;

    // Gradient is anchored to the text's advance box so colors span exactly the text.
    const gradient = ctx.createLinearGradient(centerX - metrics.width / 2, 0, centerX + metrics.width / 2, 0);
    RAINBOW.forEach((color, index) => gradient.addColorStop(index / (RAINBOW.length - 1), color));

    ctx.fillStyle = gradient;
    ctx.fillText(TEXT, centerX, (canvas.height - height) / 2 + metrics.actualBoundingBoxAscent);
  }, []);

  return (
    <div className={className}>
      <MatrixCanvas draw={draw} deps={[draw]} />
    </div>
  );
}
