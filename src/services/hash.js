const brcypt = require('bcrypt');

class HashService {
    constructor() {
        this.saltRounds = 10;
    }

    async hashPassword(password) {
        return await brcypt.hash(password, this.saltRounds);
    }

    async comparePassword(password, hash) {
        return await brcypt.compare(password, hash);
    }
}

module.exports = HashService;