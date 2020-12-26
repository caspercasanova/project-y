import React from 'react';
import ProductGrid from '../../components/ProductGrid/ProductGrid';
import Footer from '../../components/common/Footer/Footer';
import Header from '../../components/common/Header/Header';

export default function Products() {
  return (
    <div>
      <Header />
      <ProductGrid />
      <Footer />
    </div>
  );
}
