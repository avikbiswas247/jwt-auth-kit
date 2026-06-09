import jwt from 'jsonwebtoken';
import { JWT_SECRET } from '../config';
import {tokenexpiration} from '../config';
function generateToken(payload,JWT_SECRET,options) {
  
  return jwt.sign(payload, JWT_SECRET, { expiresIn: tokenexpiration||'1h', ...options });
}
function verifyToken(token, JWT_SECRET) {
  try {
    return jwt.verify(token, JWT_SECRET);
  } catch (err) {
    return null;
  }
}
module.exports = {
  generateToken,
  verifyToken
};