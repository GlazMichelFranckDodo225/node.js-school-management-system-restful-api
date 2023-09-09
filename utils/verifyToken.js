const jwt = require('jsonwebtoken');

const verifyToken = token => {
  return jwt.verify(
    token,
    'anykey',
    (error, decoded) => {
        if(error) {
            return {msg: "Invalid Token"};
        } else {
            return decoded // decoded == user
        }
    }
  );
}

module.exports = verifyToken;