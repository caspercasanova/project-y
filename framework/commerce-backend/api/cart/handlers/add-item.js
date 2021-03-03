import getCartCookie from '../../utils/getCartCookie'

const addItem = async ({ res, body: { cartId, item }, config }) => {
  if (!item) {
    return res
      .status(400)
      .json({ data: null, errors: [{ message: 'Missing Item' }] });
  }
  if (!item.quantity) item.quantity = 1;

  const options = {
    method: 'POST',
    body: JSON.stringify({
      line_items: [parseCartItem(item)],
      ...(!cartId && config.storeChannelId
        ? { channel_id: config.storeChannelId }
        : {}),
    }),
  };

  const { data } = cartId
    ? await config.storeApiFetch(
        `/v3/carts/${cartId}/items?include=line_items.physical_items.options`,
        options
      )
    : await config.storeApiFetch(
        '/v3/carts?include=line_items.physical_items.options',
        options
      );

    res.setHeader(
      'Set-Cookie',
      getCartCookie(config.cartCookie, data.id, config.cartCookieMaxAge)
    )
    res.status(200).json({ data })
};
export default addItem