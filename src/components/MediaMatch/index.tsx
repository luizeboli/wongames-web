import styled, { css } from 'styled-components';
import media, { DefaultBreakpoints } from 'styled-media-query';

type breakpointsKey = keyof DefaultBreakpoints;

export type MediaMatchProps = {
  lessThan?: breakpointsKey;
  greaterThan?: breakpointsKey;
};

const mediaModifiers = {
  lessThan: (size: breakpointsKey) => css`
    ${media.lessThan(size)`
      display: block;
    `}
  `,
  greaterThan: (size: breakpointsKey) => css`
    ${media.greaterThan(size)`
      display: block;
    `}
  `,
};

// Helper to show or hide components based on media-query
// <MediaQuery greaterThan="medium"> must show elements only on viewports greater than 768px

export default styled.div<MediaMatchProps>`
  ${({ lessThan, greaterThan }) => css`
    display: none;

    ${!!lessThan && mediaModifiers.lessThan(lessThan)}
    ${!!greaterThan && mediaModifiers.greaterThan(greaterThan)}
  `}
`;
