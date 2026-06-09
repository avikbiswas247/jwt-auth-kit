import dotenv from "dotenv";
dotenv.config();
module.exports = {
 JWT_SECRET: process.env.JWT_SECRET || 'your_jwt_secret',
 tokenexpiration: process.env.TOKEN_EXPIRATION || '1h', 
 PORT: process.env.PORT || 3000,
 DB_URL: process.env.DB_URL || 'mongodb://localhost:27017/yourdbname'
}