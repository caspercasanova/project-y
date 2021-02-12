import React from 'react';
import ProductGridView from '../../components/ProductGrid/ProductGridView/ProductGridView';
import Container from '../../components/ui/Container/Container';
import Layout from '../../components/common/Layout/Layout';

export default function Products() {
  return (
    <Container>
      <Layout>
        <ProductGridView />
      </Layout>
    </Container>
  );
}
