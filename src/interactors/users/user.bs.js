const User = require('../../entities/user.entity');
const HashService = require('../../services/hash');

class UserInteractor {

    constructor({userRepository}) {
        this.userRepository = userRepository;
        this.hashService = new HashService();
    }

    async execute(input) {
        try {
            const user = new User(input);
            
            if (user.isAdult()) {
                const hashedPassword = await this.hashService.hashPassword(user.password);
                user.password = hashedPassword;

                return await this.userRepository.create(user);
            } else {
                return 'User is not an adult';
            }
            
        } catch (error) {
            console.error('Error occurred while creating user:', error);
            return error.toString();
        }
        
    }
    
}

module.exports = UserInteractor;