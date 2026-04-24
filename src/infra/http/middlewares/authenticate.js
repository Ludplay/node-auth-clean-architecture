const TokenService = require('../../../services/token');
const httpResponse = require('../http-response-handler');

const authMiddleware = (req, res, next) => {

    const authHeader = req.headers['authorization'];

    if (!authHeader) {
        return httpResponse(res, 401, 'No token provided');
    }

    const parts = authHeader.split(' ');

    if(parts.length !== 2) {
        return httpResponse(res, 401, 'Token error');
    }

    const [pronoun, token] = parts;

    if(pronoun !== 'Bearer') {
        return httpResponse(res, 401, 'Invalid token format');
    }

    try {
        const tokenService = new TokenService();
        const tokenInfo = tokenService.verify(token);

        req.headers.userId = tokenInfo.userId;
        next();
    } catch (error) {
        return httpResponse(res, 401, error.toString());
    }
}

module.exports = authMiddleware;