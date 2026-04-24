const HashService = require('../../services/hash');
const TokenService = require('../../services/token');

class LoginUserInteractor {
    constructor({userRepository}) {
        this.userRepository = userRepository;
        this.hashService = new HashService();
        this.tokenService = new TokenService();
    }

    async execute(email, password) {

        const user = await this.userRepository.findByEmail(email);

        if(!user) {
            return null;
        }
        
        const isPasswordValid = await this.verifyPassword(password, user.password);

        if(!isPasswordValid) {
            return 'Invalid data';
        }

        const token = await this.generateToken(user);

        return {
            token
        };
    }

    async verifyPassword(password, hash) {
        return await this.hashService.comparePassword(password, hash);
    }

    async generateToken(user) {

        const payloadToken = {
            userId: user.id,
            email: user.email
        };

        return await this.tokenService.generate(payloadToken);
    }
}

module.exports = LoginUserInteractor;