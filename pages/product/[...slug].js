import React from 'react';
import { useRouter } from 'next/router';

export default function Slug({ product }) {
  const router = useRouter();
  return router.isFallback ? (
    <div>
      <div>I am loading</div>
    </div>
  ) : (
    <ProductView product={product} />
  );
}
