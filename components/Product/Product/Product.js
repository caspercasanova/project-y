import React, { Fragment } from 'react';
import Image from 'next/image';
import styles from './Product.module.scss';

export default function Product({ product }) {
  return (
    <Fragment>
      <div className={styles.Product}>
        <header>
          <h1>Product Name</h1>
          <h2>$420.69</h2>
        </header>
        <figure className={styles.Image_Card}>
          <img src={'/images/eazy_e.png'} alt={'Product Image'} />
        </figure>
        <div className={styles.ButtonContainer}>
          <button className={styles.AddToCart}>Add To Cart</button>
        </div>
        <ProductAbout />
      </div>
    </Fragment>
  );
}

const ProductAbout = () => {
  return (
    <section className={styles.ProductAbout}>
      <header>
        <h3>About</h3>
        <hr />
      </header>
      <p>
        GDXJ tracks a market-cap-weighted index of global gold- and
        silver-mining firms, focusing on small caps.lf The listed name
        for GDXJ is VanEck Vectors Junior Gold Miners ETF.
      </p>
      <ProductDetails />
    </section>
  );
};

const ProductDetails = () => {
  return (
    <div>
      <h3>Product Details</h3>
      <hr />
      <ul className={styles.ProductDetailsList}>
        <li>
          <p>Type: Classic Tee</p>
        </li>
        <li>
          <p>True to Size</p>
        </li>
        <li>
          <p>Screen Print</p>
        </li>
        <li>
          <p>
            Incredibly soft, made with tight-knit 100% cotton for
            everyday wear.
          </p>
        </li>
        <li>
          <p>
            Care Instruction: Machine wash cold. Tumble dry low. Do
            not iron. Do not dry clean.
          </p>
        </li>

        <li>
          <p>Minimal Shrinkage</p>
        </li>
      </ul>
    </div>
  );
};

{
  /* <p>
  REMEMBER THE ROSWELL RAYGUNS IN VERSATILE COMFORT. In the early
  '00s, Nike Basketball created a fake '70s-era basketball team for
  some fun, funky TV spots. The Nike Rayguns Basketball T-Shirt is a
  play on those old ads with the "Roswell Rayguns" alien logo. It's
  made from soft, comfortable cotton with a relaxed fit. Rayguns Alien
  Logo The large "Roswell Rayguns" alien logo comes from the memorable
  Nike Basketball commercials made back in the early '00s. Easy,
  Everyday Comfort Everyday cotton fabric feels soft and lightweight.
  The fit is relaxed and easy to wear with a versatile shape.
</p>; */
}
