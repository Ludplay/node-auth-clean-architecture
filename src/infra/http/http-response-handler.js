
const httpResponse = (res, statusCode, message = null, data = null) =>  {
    const response = message ? { message } : data;
    return res.status(statusCode).json(response);
}

module.exports = httpResponse;