import React from 'react';
import { useRouter } from 'next/router';
import ProductView from '../../components/Product/ProductView/ProductView';
import Footer from '../../components/common/Footer/Footer';
import Header from '../../components/common/Header/Header';
import Container from '../../components/ui/Container/Container';
export default function Slug({ product }) {
  const router = useRouter();
  return (
    <Container>
      <Header />
      <ProductView product={product} />
      <Footer />
    </Container>
  );
}
