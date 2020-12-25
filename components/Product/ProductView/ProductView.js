import React from 'react';
import ProductStats from '../ProductStats/ProductStats';
import Product from '../Product/Product';
import ProductComments from '../ProductComments/ProductComments';

export default function ProductView({ product }) {
  return (
    <main>
      <section>
        <Product product={product} />
      </section>
      <section>
        <ProductStats product={product} />
      </section>
      <section>
        <ProductComments product={product} />
      </section>
    </main>
  );
}
