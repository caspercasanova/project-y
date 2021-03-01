import Cookies from 'js-cookie';
import { useCommerce } from '..';

export default function useCart(
  options,
  input,
  fetcherFn,
  swrOptions
) {
  const { cartCookie } = useCommerce();
}
