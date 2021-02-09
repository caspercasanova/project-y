import React from 'react';
import styles from './NewReleases.module.scss';
import SimpleLineChart from '../../graphs/SimpleLineChart';
import Image from 'next/image';
export default function NewReleases() {
  return (
    <section className={styles.New_From_Us_Section}>
      <header className={styles.New_From_Us_Header}>
        <h3>New From Project-Y</h3>
      </header>
      <div className={styles.New_From_Us_Body}>
        <LargeProductCard productName={'Product X'} />
        <LargeProductCard productName={'Product F'} />
      </div>
    </section>
  );
}

const LargeProductCard = ({ productName }) => {
  return (
    <article className={styles.Large_Product_Card}>
      <header className={styles.Large_Product_Header}>
        <h3>{productName}</h3>
      </header>
      <figure className={styles.Large_Product_Image}>
        <Image
          src={'/images/eazy_e.png'}
          alt={'Large_product_Card'}
          layout={'responsive'}
          unsized
        />
      </figure>
      <div>
        <div>Product X:</div>
        <div>Price: $$120</div>
      </div>
    </article>
  );
};

{
  /* <figure className={styles.Large_Product_Chart}>
        <SimpleLineChart />
      </figure> */
}
