import React, { useState } from 'react';
import Image from 'next/image';
import styles from './ProductCard.module.scss';

export default function ProductCard() {
  const [isHover, setHover] = useState(false);
  return (
    <article
      className={styles.Product_Card}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}>
      <div>
        <Image
          src={'/images/eazy_e.png'}
          width={350}
          height={350}
          alt={'product_img'}
        />
      </div>
      <div className={styles.Card_SubSection}>
        {isHover ? <ImageCards /> : <QuickInfo />}
        <div>Price</div>
      </div>
    </article>
  );
}

const ImageCards = () => {
  return (
    <div>
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
    <div>
      <div>Just In</div>
      <div>Sick ass hat</div>
      <div>1 size fits all</div>
      <div>5 color</div>
    </div>
  );
};
