import getConfig from '..';

export default function (handler, handlers, defaultOptions) {
  return function getApiHandler({
    config,
    operations,
    options,
  } = {}) {
    const ops = { ...operations, ...handlers };
    const opts = { ...defaultOptions, ...options };
    return function apiHandler(req, res) {
      return handler(req, res, getConfig(config), ops, opts);
    };
  };
}
