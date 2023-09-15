export function getMoveableGlobeContainerRight(width: number) {
  if (width < 768 || width > 1100) {
    const difference = (width - 1100) / 2;
    return `${difference}px`;
  }

  return `0px`;
}
