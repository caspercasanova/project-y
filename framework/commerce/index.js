/// TODO MAKE A COMMERCE PROVIDER AND USE CART
import { createContext, useContext, useRef, useMemo } from 'react';

const Commerce = createContext();

export function CommerceProvider({ children, config }) {
  if (!config) {
    throw new Error(
      'CommerceProvider requires a valid config object'
    );
  }

  const fetcherRef = useRef(config.fetcher);
  // Because the config is an object, if the parent re-renders this provider
  // will re-render every consumer unless we memoize the config
  const cfg = useMemo(
    () => ({
      fetcher: fetcherRef,
      // locale: config.locale,
      cartCookie: config.cartCookie,
    }),
    [config.locale, config.cartCookie]
  );

  return (
    <Commerce.Provider value={cfg}>{children}</Commerce.Provider>
  );
}

export function useCommerce() {
  return useContext(Commerce);
}
