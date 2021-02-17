import React, { useState } from 'react';
import Image from 'next/image';
import styles from './ProductCard.module.scss';
import Link from 'next/link';
import TinyLineChart from '../../graphs/TinyLineChart';
import Corners from '../../ui/Corners/Corners';

export default function ProductCard({ product }) {
  const [isHover, setHover] = useState(false);

  const [imgIdx, setImgIdx] = useState(0);

  return (
    <Link href={`/product/sick`}>
      <article
        className={styles.Product_Card}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}>
        <Corners top={true} />
        <div className={styles.Product_Card_Container}>
          <header className={styles.Title}>
            <h3 className={styles.Prod_Name}>{product.name}</h3>
            <div className={styles.Price}>{product.price}</div>
          </header>

          <img
            className={styles.mainPicture}
            src={product.pics[imgIdx]}
            alt={'product_img'}
          />
          <div style={{ width: '100px', height: '50px' }}>
            <TinyLineChart />
          </div>
          <div className={styles.Card_SubSection}>
            {isHover ? (
              product.pics.map((pic, index) => (
                <ImageCards
                  key={index}
                  src={pic}
                  setImg={() => setImgIdx(index)}
                />
              ))
            ) : (
              <QuickInfo />
            )}
          </div>
        </div>
        <Corners bottom={true} />
      </article>
    </Link>
  );
}

const ImageCards = ({ src = '/images/eazy_e.png', setImg }) => {
  return (
    <div onMouseOver={setImg} className={styles.Product_Card_Images}>
      <img src={src} alt={'lil img'} />
    </div>
  );
};

const QuickInfo = () => {
  return (
    <div className={styles.Product_Card_QuickInfo}>
      <div className={styles.Product_Card_Message}>
        <div>Just In</div>
        <div>Sick ass hat</div>
      </div>
    </div>
  );
};
