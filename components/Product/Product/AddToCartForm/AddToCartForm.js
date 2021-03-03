import React from 'react';
import styles from './AddToCartForm.module.scss';
// import { useAddItem } from '@framework/commerce/cart';
export default function AddToCartForm() {
  const handleAddToCart = e => {
    e.preventDefault();

    // check product size is avail
    // check product color is avail
  };

  return (
    <div className={styles.AddToCartForm}>
      <form onSubmit={handleAddToCart}>
        <fieldset className={styles.ColorWay}>
          <Color
            src={
              'https://static.nike.com/a/images/t_PDP_144_v1/f_auto/nxmp8kodn5ufnd2ypr6f/sportswear-leg-a-see-womens-bike-shorts-5TBrgm.jpg'
            }
          />
          <Color
            src={
              'https://static.nike.com/a/images/t_PDP_144_v1/f_auto/nxmp8kodn5ufnd2ypr6f/sportswear-leg-a-see-womens-bike-shorts-5TBrgm.jpg'
            }
          />
          <Color
            src={
              'https://static.nike.com/a/images/t_PDP_144_v1/f_auto/nxmp8kodn5ufnd2ypr6f/sportswear-leg-a-see-womens-bike-shorts-5TBrgm.jpg'
            }
          />
          <Color
            src={
              'https://static.nike.com/a/images/t_PDP_144_v1/f_auto/nxmp8kodn5ufnd2ypr6f/sportswear-leg-a-see-womens-bike-shorts-5TBrgm.jpg'
            }
          />
        </fieldset>
        <fieldset className={styles.size_guide}>
          <Size>XS (0-2)</Size>
          <Size>S (0-2)</Size>
          <Size>M (8-10)</Size>
          <Size>L (12-14)</Size>
          <Size>XL (16-18)</Size>
          <Size>2XL (20-22)</Size>
        </fieldset>

        <div className={styles.ButtonContainer}>
          <button type={'submit'} className={styles.AddToCart}>
            Add To Cart
          </button>
        </div>
      </form>
    </div>
  );
}

const Color = ({ src }) => {
  return (
    <>
      <div className={styles.color}>
        <img src={src} />
      </div>
    </>
  );
};
const Size = ({ children }) => {
  return (
    <>
      <div className={styles.available}>{children}</div>
    </>
  );
};
