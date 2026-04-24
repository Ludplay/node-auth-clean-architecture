


class UpdateUserInteractor {

    constructor({userRepository}) {
        this.userRepository = userRepository;
    }

    async execute(userId, input) {
        return await this.userRepository.updateUser(userId, input);
    }
    
}

module.exports = UpdateUserInteractor;