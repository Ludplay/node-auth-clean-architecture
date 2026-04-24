const httpResponse = require('../http-response-handler');

const validate = (schema) => {
    return (req, res, next) => {
        try {
            schema.parse(req.body);
            next();
        } catch (error) {
            return httpResponse(res, 400, null, {
                error: 'Validation error', 
                details: error 
            });
        }
    }
};

module.exports = validate;