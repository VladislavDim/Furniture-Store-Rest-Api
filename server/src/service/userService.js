import bcrypt from 'bcrypt';

import User from "../models/User.js"
import { generateToken } from '../util/tokenUtils.js';

export default {
    async register(userData) {
        const user = await User.create(userData);

        const token = generateToken(user);

        return { user, token };

    },
    async login(email, password) {
        const user = await User.findOne({ email });

        if (!user) {
            throw new Error('Invalid email or password!');
        }

        const isValid = await bcrypt.compare(password, user.password);

        if (!isValid) {
            throw new Error('Invalid email or password!');
        }

        const token = generateToken(user);

        return { user, token };
    }
}