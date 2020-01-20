const breakpoints = {
  mobilePortrait: '320px',
  mobileLandscape: '640px',
  tabletPortrait: '768px',
  tabletLandscape: '1024px',
  laptop: '1280px',
  desktop: '2560px',
};

const device = Object.entries(breakpoints).reduce((accumulator, [key, value]) => {
  accumulator[key] = `@media (min-width: ${value})`;
  return accumulator;
}, {});

export default device;
