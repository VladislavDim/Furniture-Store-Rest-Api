import bcrypt from 'bcrypt';

import User from "../models/User.js"
import { generateToken } from '../util/tokenUtils.js';

export default {
    async register(userData) {
        const user = await User.create(userData);

        const token = generateToken(user);

        return { user, token };

    },
    }
}