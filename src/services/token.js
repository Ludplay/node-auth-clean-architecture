const jwt = require('jsonwebtoken');
const JWT_SECRET = process.env.JWT_SECRET || 'secret';

class TokenService {
    generate(payload) {
        return jwt.sign(payload, JWT_SECRET, { expiresIn: '20m' });
    }

    verify(token) {
        try {
            return jwt.verify(token, JWT_SECRET);
        } catch (error) {
            throw new Error(error);
        }
    }
}

module.exports = TokenService;