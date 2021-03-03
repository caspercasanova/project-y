import Cookies from 'js-cookie';
import { useCommerce } from '..';
import { useHook, useSWRHook } from '../utils/use-hook';
import { Provider, useCommerce } from '..';

export const fetcher = (options, inut, fetch) => {
  return cardId ? await fetch({...options}) : null
}

export const fn = (provider) => provider.cart?.useCart


const useCart = (options, input, fetch) => {
  const hook = useHook(fn);
  const { cartCookie } = useCommerce();
  const fetcherFn = hook.fetcherFn ?? fetcher;
  
  const wrapper = context => {
    context.input.cartId = Cookies.get(cartCookie);
    return fetcherFn(context);
  };

  return useSWR({ ...hook, fetcher })(input);
};

export default useCart;
