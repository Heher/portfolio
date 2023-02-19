export const basicVariants = {
  hidden: {
    opacity: 0,
    transitionEnd: {
      display: 'none'
    }
  },
  shown: {
    opacity: 1,
    display: 'block'
  }
};

export const slideUpVariants = {
  hidden: {
    marginTop: '100vh'
  },
  shown: {
    marginTop: '50vh'
  }
};
