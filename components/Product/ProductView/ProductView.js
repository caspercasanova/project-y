import React from 'react';
import ProductStats from '../ProductStats/ProductStats';
import Product from '../Product/Product';
import ProductComments from '../ProductComments/ProductComments';
import styles from './ProductView.module.scss';
import Main from '../../ui/Main/Main';
export default function ProductView({ product }) {
  return (
    <Main>
      <section>
        <Product product={product} />
      </section>
      <section>
        <ProductStats product={product} />
      </section>
      <section>
        <ProductComments product={product} />
      </section>
    </Main>
  );
}
