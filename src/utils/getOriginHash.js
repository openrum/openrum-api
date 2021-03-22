const md5 = require('md5');

exports.getOriginHash = (o) => {
  let origin = o.replace(/http(s)?:\/\//gi, '');
  origin = origin.replace('www.', '');
  origin = origin.replace(/\/$/gi, '');

  return md5(origin);
};
