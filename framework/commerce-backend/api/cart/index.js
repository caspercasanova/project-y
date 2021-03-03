import addItem from './handlers/add-item';
import { BackendCommerceAPIError } from '../utils/errors';


const cartApi = async (req, res, config, handlers) => {
  const { cookies } = req;
  const cartId = cookies[config.cartCookie];

  try {
    if (req.method === 'POST') {
      const body = { ...req.body, cartId };
      return await handlers['addItem']({ req, res, config, body });
    }
  } catch (error) {
    console.error(error);
    const message =
      error instanceof BackendCommerceAPIError
        ? 'An unexpected error ocurred with the Bigcommerce API'
        : 'An unexpected error ocurred';
    res.status(500).json({ data: null, errors: [{ message }] });
  }
};

export const handlers = { addItem };
