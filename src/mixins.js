import { css, keyframes } from 'styled-components';

// Constants
const breakpoints = {
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  '2xl': '1536px',
};

const sizes = {
  sm: '0.125rem',
  md: '0.375rem',
  lg: '0.5rem',
  xl: '0.75rem',
  default: '0.25rem',
  full: '9999px',
};

const fontSizes = {
  xs: '0.75rem',
  sm: '0.875rem',
  base: '1rem',
  lg: '1.125rem',
  xl: '1.25rem',
  '2xl': '1.5rem',
  '3xl': '1.875rem',
  '4xl': '2.25rem',
};

const lineHeights = {
  xs: '1rem',
  sm: '1.25rem',
  base: '1.5rem',
  lg: '1.75rem',
  xl: '1.75rem',
  '2xl': '2rem',
  '3xl': '2.25rem',
  '4xl': '2.5rem',
};

// Mixins
const text = (size = 'base') => css`
  font-size: ${fontSizes[size]};
  line-height: ${lineHeights[size]};
`;

const rounded = (size = 'default') => css`
  border-radius: ${sizes[size]};
`;

const spaceX = (amount = '1rem') => css`
  & > * + * {
    margin-left: ${amount};
  }
`;

const spaceY = (amount = '1rem') => css`
  & > * + * {
    margin-top: ${amount};
  }
`;

const gradient = ({
  direction = 'to right',
  from = '',
  via = '',
  to = '',
  url = '',
}) => {
  const colorStops = `${from}, ${via ? `${via}, ` : ''}${to}`;
  const gradient = `linear-gradient(${direction}, ${colorStops})`;
  return url
    ? css`
        background: ${gradient}, url(${url}) no-repeat center center;
        background-size: cover;
      `
    : css`
        background-image: ${gradient};
      `;
};

// Media queries
const sm = (styles, ...interpolations) => css`
  @media (min-width: ${breakpoints.sm}) {
    ${css(styles, ...interpolations)}
  }
`;

const md = (styles, ...interpolations) => css`
  @media (min-width: ${breakpoints.md}) {
    ${css(styles, ...interpolations)}
  }
`;

const lg = (styles, ...interpolations) => css`
  @media (min-width: ${breakpoints.lg}) {
    ${css(styles, ...interpolations)}
  }
`;

const xl = (styles, ...interpolations) => css`
  @media (min-width: ${breakpoints.xl}) {
    ${css(styles, ...interpolations)}
  }
`;

const _2xl = (styles, ...interpolations) => css`
  @media (min-width: ${breakpoints['2xl']}) {
    ${css(styles, ...interpolations)}
  }
`;

// Keyframes
const pulse = keyframes`
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: .5;
  }
`;

// Animations
const animatePulse = css`
  animation: ${pulse} 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
`;

const mixins = {
  text,
  rounded,
  spaceX,
  spaceY,
  gradient,
  sm,
  md,
  lg,
  xl,
  _2xl,
  animatePulse,
};

export default mixins;
