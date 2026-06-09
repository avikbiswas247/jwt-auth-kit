import {verifytoken} from '../core/token.js';
import {JWT_SECRET} from '../config.js';
function authMiddleware(JWT_SECRET) {
    return (req, res, next) => {   
        const authHeader = req.headers.authorization;
        if (!authHeader || !authHeader.startsWith('Bearer ')) {
            return res.status(401).json({ message: 'Unauthorized' });
        }
        const token = authHeader.split(' ')[1];
        const decoded = verifytoken(token, JWT_SECRET);
        if (!decoded) {
            return res.status(401).json({ message: 'Unauthorized' });
        }
        req.user = decoded;
        next();
    };
}