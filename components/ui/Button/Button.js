import styles from './Button.module.scss';
import React from 'react';
import { styled } from '../../../stitches.config';
// export default function Button({
//   variant = 'normal',
//   onClick = () => {},
//   type = 'button',
//   loading,
//   children,
// }) {
//   let style;

//   if (variant == 'normal') {
//     style = styles.normal;
//   }

//   if (variant == 'pulse') {
//     style = styles.pulse;
//   }

//   return (
//     <button
//       onClick={onClick}
//       className={`${styles.button} ${style}`}
//       type={type}>
//       {children}
//       {loading && <i>..Loading..</i>}
//     </button>
//   );
// }

const Button = styled('button', {
  // Edit the code!

  backgroundColor: 'hsl(206,100%,50%)',
  borderRadius: '9999px',
  color: 'white',
  fontSize: '17px',
  fontWeight: 500,
  paddingTop: '10px',
  paddingBottom: '10px',
  paddingLeft: '16px',
  paddingRight: '16px',
  textDecoration: 'none',
  appearance: 'none',
  transition: 'all 200ms ease',
  margin: '0px 8px',
  cursor: 'pointer',
  ':hover': {
    boxShadow: '0 5px 15px rgba(0, 0, 0, .12)',
    transform: 'translateY(-2px)',
  },

  variants: {
    color: {
      white: {
        backgroundColor: 'transparent',
        color: 'hsl(206,10%,44%)',
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
      gray: {
        backgroundColor: 'gainsboro',
        ':hover': {
          backgroundColor: 'lightgray',
        },
      },
    },
  },
});

export default Button;

// render(
//   <div style={{ display: 'flex', justifyContent: 'center' }}>
//     <Button as="a" href="/docs/installation">Documentation</Button>
//     <Button color="white" as="a" href="https://github.com/modulz/stitches">GitHub</Button>
//   </div>
// );
