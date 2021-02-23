import React from 'react';
import Tag from '../../../ui/Tag/Tag';
import styles from './ProductHeader.module.scss';

export default function ProductHeader() {
  return (
    <header className={styles.ProductHeader}>
      <h1>Project Y Product</h1>
      <div>
        Popular User Defined Tags for this product.
        <div className={styles.tagContainer}>
          <Tag>Sick</Tag>
          <Tag>Leading The Charge</Tag>
          <Tag>Spearhead</Tag>
          <Tag>Str8 WestCoastin</Tag>
          <Tag>Feeling Rich</Tag>
        </div>
      </div>
      <div className={styles.ProductHeaderMain}>
        <div>
          <h2>$420.69</h2>
          <h5>+$9.10 (+1.47%) Today</h5>
        </div>
      </div>
    </header>
  );
}
