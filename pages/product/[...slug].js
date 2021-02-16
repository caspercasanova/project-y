import React from 'react';
import { useRouter } from 'next/router';
import ProductView from '../../components/Product/ProductView/ProductView';
import Container from '../../components/ui/Container/Container';
import Layout from '../../components/common/Layout/Layout';

export default function Slug({ product }) {
  const router = useRouter();
  return (
    <Container>
      <Layout>
        <ProductView product={product} />
      </Layout>
    </Container>
  );
}
