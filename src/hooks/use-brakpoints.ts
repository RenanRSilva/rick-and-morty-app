import useMediaQuery from "./use-media-query";

export default function useBreakpoints() {
  const breakpoints = {
    isXs: useMediaQuery('(max-width: 640px)'),
    isSm: useMediaQuery('(min-width: 641px) and (max-width: 768px)'),
    isMd: useMediaQuery('(min-width: 769px) and (max-width: 1024px)'),
    isLg: useMediaQuery('(min-width: 1025px)'),
    isMdSm: useMediaQuery('(min-width: 1400px) and (max-width: 1599px)'),
    isLgMd: useMediaQuery('(min-width: 1600px) and (max-width: 1799px)'),
    isLgg: useMediaQuery('(min-width: 1800px)'),
    active: 'xs',
  };
  if (breakpoints.isXs) breakpoints.active = 'xs';
  if (breakpoints.isSm) breakpoints.active = 'sm';
  if (breakpoints.isMd) breakpoints.active = 'md';
  if (breakpoints.isLg) breakpoints.active = 'lg';
  return breakpoints;
}
