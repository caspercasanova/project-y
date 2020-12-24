import React from 'react';
import ProductDisplay from './ProductDisplay';
import ProductStats from './ProductStats';
import ProductComments from './ProductComments';

export default function ProductPage() {
  return (
    <section>
      <ProductDisplay />
      <ProductStats />
      <ProductComments />
    </section>
  );
}
