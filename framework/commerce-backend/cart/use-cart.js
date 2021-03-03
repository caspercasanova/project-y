import { useMemo } from 'react';
import useCart from '../../commerce-core/cart/use-Cart';

// TODO implement
// import { normalizeCart } from '../lib';

export const handler = {
  fetchOptions: {
    url: '/api/commerce-backend/cart',
    method: 'GET',
  },
  async fetcher({ cartId, options, fetch }) {
    const data = cartId ? await fetch(options) : null;
    return data; // && normalizeCart
  },
  useHook: ({ useData }) => input => {
    const response = useData({
      swrOptions: { revalidateOnFocus: false, ...input?.swrOptions },
    });

    return useMemo(
      () =>
        Object.create(response, {
          isEmpty: {
            get() {
              return (response.data?.lineItems.length ?? 0) <= 0;
            },
            enumerable: true,
          },
        }),
      [response]
    );
  },
};
