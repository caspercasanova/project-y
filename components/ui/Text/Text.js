import { styled } from '../../stitches.config';

export default Text = styled('p', {
  fontFamily: '$system',
  color: '$hiContrast',
  variants: {
    size: {
      1: {
        fontSize: '$1',
      },
      2: {
        fontSize: '$2',
      },
      3: {
        fontSize: '$3',
      },
    },
  },
});
