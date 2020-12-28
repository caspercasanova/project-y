import React from 'react';
import ProductCard from './ProductCard/ProductCard';
import styles from './ProductGrid.module.scss';
export default function ProductGrid() {
  let products = new Array(10).fill(0);
  return (
    <main>
      <section className={styles.Product_Grid}>
        {products.map((
          product,
          index // This is where were add a link to a dynamic product
        ) => (
          <ProductCard key={index} product={'sick'} />
        ))}
      </section>
    </main>
  );
}
