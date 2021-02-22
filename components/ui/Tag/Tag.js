import React from 'react';
import { styled } from '../../../stitches.config';

const Tag = styled('button', {
  // Edit the code!

  margin: '2px',
  maxWidth: '200px',
  padding: '0 7px',
  backgroundColor: 'hsl(63, 88%, 68%)',
  lineHeight: '19px',
  borderRadius: '2px',
  textDecoration: 'none',
  appearance: 'none',
  transition: 'all 200ms ease',
  textOverflow: 'ellipsis',
  fontSize: '17px',
  outline: 'none',
  cursor: 'pointer',
  ':hover': {
    boxShadow: '0 5px 15px rgba(0, 0, 0, .12)',
    transform: 'translateY(-2px)',
  },

  variants: {
    color: {
      yellow: {
        backgroundColor: 'transparent',
        color: 'hsl(63, 88%, 68%)',
        ':hover': {
          backgroundColor: 'white',
          color: 'hsl(206,10%,5%)',
        },
      },
      violet: {
        backgroundColor: 'blueviolet',
        color: 'white',
        ':hover': {
          backgroundColor: 'darkviolet',
        },
      },
    },
  },
});

export default Tag;
