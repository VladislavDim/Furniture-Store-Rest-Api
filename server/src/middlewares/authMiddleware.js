import jsonwebtoken from 'jsonwebtoken';
import { JWT_SECRET } from "../config.js";
import InvalidToken from '../models/InvalidTokens.js';

export const auth = async (req, res, next) => {
    const token = req.headers['x-authorization'];

    if (!token) {
        return next();
    }

    const invalidToken = await InvalidToken.findOne({ token });
    if (invalidToken) {
        return res.json({ error: 'Invalid token!' });
    }

    try {
        const decodedToken = jsonwebtoken.verify(token, JWT_SECRET);
        req.user = decodedToken;
    } catch (error) {
        return res.json({ error: 'Invalid token!' });
    }
    
    next();
};