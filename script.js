const jwt = require('jsonwebtoken');

const script = (payload, secret) => {
  const token = jwt.sign(payload, secret, { expiresIn: '1h' }); // 1 hour expiry
  return token;
};

module.exports = script;
