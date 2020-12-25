import React from 'react';
import ProductCard from './ProductCard/ProductCard';

export default function ProductGrid() {
  let products = new Array(40).fill(0);
  return (
    <div>
      <main>
        <section>
          {products.map((product, index) => (
            <ProductCard key={index} />
          ))}
        </section>
      </main>
    </div>
  );
}
