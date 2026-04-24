


class GetUserInteractor {

    constructor({userRepository}) {
        this.userRepository = userRepository;
    }

    async execute(userId) {
        return await this.userRepository.getUser(userId);
    }
    
}

module.exports = GetUserInteractor;