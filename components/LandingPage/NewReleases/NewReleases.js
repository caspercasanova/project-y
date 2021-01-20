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
        <LargeProductCard />
        <LargeProductCard />
      </div>
    </section>
  );
}

const LargeProductCard = () => {
  return (
    <article className={styles.Large_Product_Card}>
      <header className={styles.Large_Product_Header}>
        <h3>Product_X</h3>
      </header>
      <figure className={styles.Large_Product_Image}>
        <Image
          src={'/images/eazy_e.png'}
          width={680}
          height={475}
          alt={'Large_product_Card'}
        />
      </figure>
      <div>
        <div>Product X:</div>
        <div>Price: $$120</div>
      </div>
      <figure className={styles.Large_Product_Chart}>
        <SimpleLineChart />
      </figure>
    </article>
  );
};
