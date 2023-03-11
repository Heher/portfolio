function getGlobeHeight(width: number, moveableMobile = false) {
  if (width < 768) {
    if (moveableMobile) {
      return '100vh';
    }
    return '50vh';
  }

  return '100vh';
}

function getGlobeContainerTop(width: number, showDetails = false, citySelected = false) {
  if (width < 768) {
    if (!showDetails) {
      return 'auto';
    }

    return '0vh';
  }

  if (citySelected) {
    if (width < 1000) {
      return '-10vh';
    }

    return '-20vh';
  }

  return '0vh';
}

export function getMoveableGlobeContainerRight(width: number, moveableMobile = false) {
  if (moveableMobile) {
    return '0px';
  }

  if (width < 768 || width > 1100) {
    const difference = (width - 1100) / 2;
    return `${difference}px`;
  }

  return `0px`;
}

function getGlobeContainerBottom(width: number, showDetails = false) {
  if (width < 768 && !showDetails) {
    return '-20vh';
  }

  return 'auto';
}

function getGlobeContainerRight(width: number, citySelected = false) {
  // Mobile
  if (width < 768) {
    return '0px';
  }

  if (citySelected) {
    if (width < 1600) {
      return '-150px';
    }

    return '0px';
  }

  // XL
  if (width > 2000) {
    const difference = (width - 1100) / 2;
    return `${difference - 500}px`;
  }

  if (width > 1100) {
    const difference = (width - 1100) / 2;
    return `${difference - 1100 * 0.35}px`;
  }

  if (width < 1000) {
    return `-${width * 0.5}px`;
  }

  return `-${width * 0.3}px`;
}

export function moveablePositioning(width: number) {
  return {
    width: '100%',
    height: getGlobeHeight(width),
    top: getGlobeContainerTop(width),
    right: getMoveableGlobeContainerRight(width),
    bottom: getGlobeContainerBottom(width)
  };
}

export function notMoveablePositioning(width: number) {
  return {
    width: '100%',
    height: getGlobeHeight(width),
    top: getGlobeContainerTop(width),
    right: getGlobeContainerRight(width),
    bottom: getGlobeContainerBottom(width)
  };
}

export function showDetailsPositioning(width: number) {
  return {
    width: '100%',
    height: getGlobeHeight(width),
    top: getGlobeContainerTop(width, true),
    right: getGlobeContainerRight(width),
    bottom: getGlobeContainerBottom(width, true)
  };
}

export function moveableMobilePositioning(width: number) {
  return {
    width: '100%',
    height: getGlobeHeight(width, true),
    top: getGlobeContainerTop(width, true),
    right: getMoveableGlobeContainerRight(width, true),
    bottom: getGlobeContainerBottom(width, true)
  };
}

export function citySelectedPositioning(width: number) {
  return {
    width: '100%',
    height: getGlobeHeight(width, false),
    top: getGlobeContainerTop(width, false, true),
    right: getGlobeContainerRight(width, true),
    bottom: getGlobeContainerBottom(width, true)
  };
}
