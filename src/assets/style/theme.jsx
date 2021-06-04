import {css} from 'styled-components';

// media queries
const sizes = {
  mobile: '425px',
  tablet: '768px',
  laptop: '1024px',
  desktop: '2560px'
}

export const device = {
  mobile: `{min-width: ${sizes.mobile}}`,
  tablet: `{min-width: ${sizes.tablet}}`,
  laptop: `{min-width: ${sizes.laptop}}`,
  desktop: `{min-width: ${sizes.desktop}}`,
}

// FONTS
export const fontFamilyNormal = "'minion-pro, serif'";
export const fontFamilyFeature = "'source-code-pro', monospace";

// export const fontWeightNormal = 400;
export const fontWeightBold = 700;
export const fontWeightLight = 300;
const mainTextColor = '#2d2c2c';

const theme = {
  fontFamilyNormal: "'minion-pro, serif'",
  fontFamilyFeature: "'source-code-pro', monospace",
  featureColor: '#c8a195',
  featureColorLighter: '#e2bbaf',
  secondaryFeatureColor: '#aec0bd',
  grey: '#6d6d6d',
  minWidthInput: '10rem',

  mainFont: css`
    font-family: ${fontFamilyNormal},
    font-size: 1rem,
    font-weight: ${props => props.bold ? '600' : '400'};
    color: ${mainTextColor},
  `
}

export default theme;
//
// colors
//
// inputs
