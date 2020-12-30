import React, { useState } from 'react';
import Image from 'next/image';
import styles from './ProductCard.module.scss';
import Link from 'next/link';
import TinyLineChart from '../../graphs/TinyLineChart';

export default function ProductCard(props) {
  const { product: p } = props;
  const [isHover, setHover] = useState(false);
  return (
    <Link href={`/product/${p}`}>
      <article
        className={styles.Product_Card}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}>
        <div className={styles.Product_Card_Container}>
          <img
            src={'/images/eazy_e.png'}
            alt={'product_img'}
          />
        </div>
        <div style={{ width: '100px', height: '50px' }}>
          <TinyLineChart />
        </div>
        <div className={styles.Card_SubSection}>
          {isHover ? <ImageCards /> : <QuickInfo />}
          <div>Price</div>
        </div>
      </article>
    </Link>
  );
}

const ImageCards = () => {
  return (
    <div className={styles.Product_Card_Images}>
      <Image
        src={'/images/eazy_e.png'}
        width={50}
        height={50}
        alt={'lil img'}
      />
    </div>
  );
};

const QuickInfo = () => {
  return (
    <div className={styles.Product_Card_QuickInfo}>
      <div className={styles.Product_Card_Message}>
        <div className={styles.Title}>Product_XYZ</div>
        <div>Just In</div>
        <div>Sick ass hat</div>
      </div>
    </div>
  );
};
