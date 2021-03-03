export class BackendCommerceAPIError extends Error {
  constructor(msg, res, data) {
    super(msg);
    this.name = 'Backend-CommerceAPI-Error';
    this.status = res.status;
    this.res = res;
    this.data = data ?? null;
  }
}
export class BigcommerceNetworkError extends Error {
  constructor(msg) {
    super(msg);
    this.name = 'Backend-CommerceAPI-Network-Error';
  }
}
