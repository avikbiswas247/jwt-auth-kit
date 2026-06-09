import {varifyToken} from '../src/Core/token.js';
import {verifyPassworsd} from '../src/Core/password.js';
import {JWT_SECRET} from '../config';
const authMiddleware = async (req, res, next) => {
  const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        return res.status(401).json({ message: 'Unauthorized' });
    }
    const token = authHeader.split(' ')[1];
    const decoded = varifyToken(token, JWT_SECRET); 
    if (!decoded) {
        return res.status(401).json({ message: 'Unauthorized' });
    }
    req.user = decoded;
    next();
};
module.exports = authMiddleware;
