import { useCallback } from 'react';
import { useCommerce } from '..';

export default function useAction(options, fetcher) {
  const { fetcherRef } = useCommerce();
  // returns a memoized callback
  // wrapper around all main functions
  return useCallback(
    input => fetcher(options, input, fetcherRef.current),
    [fetcher]
  );
}
