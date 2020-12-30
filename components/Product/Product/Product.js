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
          <img
            src={'/images/eazy_e.png'}
            alt={'Product Image'}
          />
        </figure>
        <div></div>
        <ProductAbout />
      </div>
    </Fragment>
  );
}

const ProductAbout = () => {
  return (
    <div>
      <header>
        <h3>About</h3>
        <hr />
      </header>
      <p>
        GDXJ tracks a market-cap-weighted index of global
        gold- and silver-mining firms, focusing on small
        caps.lf The listed name for GDXJ is VanEck Vectors
        Junior Gold Miners ETF.
      </p>
      <ShirtDetails />
    </div>
  );
};

const ShirtDetails = () => {
  return (
    <>
      <li>Classic Tee</li>
      <li>True to Size</li>
      <li>Screen Print</li>
      <li>
        Incredibly soft, made with tight-knit 100% cotton
        for everyday wear.
      </li>
      <li>
        Care Instruction: Machine wash cold. Tumble dry low.
        Do not iron. Do not dry clean.
      </li>
      <li>Minimal Shrinkage</li>
    </>
  );
};

const HatDetails = () => {
  return (
    <>
      <li>One size fits all</li>
      <li>Quality embroidery</li>
      <li>Curved bill</li>
      <li>Adjustable strap</li>
      <li>Hand wash/Hang Dry</li>
    </>
  );
};
