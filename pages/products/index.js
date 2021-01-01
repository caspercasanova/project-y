import React from 'react';
import ProductGridView from '../../components/ProductGrid/ProductGridView/ProductGridView';
import Footer from '../../components/common/Footer/Footer';
import Header from '../../components/common/Header/Header';
import Container from '../../components/ui/Container/Container';
export default function Products() {
  return (
    <Container>
      <Header />
      <ProductGridView />
      <Footer />
    </Container>
  );
}
