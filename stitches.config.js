import { createStyled } from '@stitches/react';

export const { styled, css } = createStyled({
  tokens: {
    fonts: {
      $system: 'system-ui',
    },

    colors: {
      $hiContrast: 'hsl(206,10%,5%)',
      $loContrast: 'white',
    },
    fontSizes: {
      $1: '13px',
      $2: '15px',
      $3: '17px',
    },
  },
});

// $mobileS: 320px;
// $mobileM: 375px;
// $mobileL: 425px;
// $tablet: 768px;
// $laptop: 1024px;
// $laptopL: 1440px;
// $desktop: 2560px;
