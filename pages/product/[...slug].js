import React from 'react';
import { useRouter } from 'next/router';
import ProductView from '../../components/Product/ProductView/ProductView';

import Footer from '../../components/common/Footer/Footer';
import Header from '../../components/common/Header/Header';

export default function Slug({ product }) {
  const router = useRouter();
  return (
    <div>
      <Header />
      <ProductView product={product} />
      <Footer />
    </div>
  );
}
