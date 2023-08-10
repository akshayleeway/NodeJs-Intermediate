const jwt = require('jsonwebtoken');
const secretKey =
  '9bfe60120bff251210dc7c9181508f138d08c899d58375b3d837293330727b587d467170df859a64211d796b2ff290fda4b56f64fcf37f694c14a237c59b7cfb'; // Replace with your actual secret key

module.exports = {
  validateToken: (req, res, next) => {
    const token = req.headers.authorization?.split(' ')[1];

    if (!token) {
      return res.status(401).json({ error: 'Authorization header missing' });
    }

    try {
      const decoded = jwt.verify(token, secretKey);

      if (decoded.userType !== 'User' || decoded.userType !== 'admin' ) {
        // console.log('Not an admin');
        return res.status(403).json({ error: 'Not authorized' });
      }

      // Store the decoded token in the request for future use if needed
      req.decodedToken = decoded;

      next();
    } catch (err) {
      return res.status(401).json({ error: 'Invalid token' });
    }
  },
};
