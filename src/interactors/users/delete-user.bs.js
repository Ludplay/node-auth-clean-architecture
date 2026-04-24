


class DeleteUserInteractor {

    constructor({userRepository}) {
        this.userRepository = userRepository;
    }

    async execute(userId) {
        return await this.userRepository.deleteUser(userId);
    }
    
}

module.exports = DeleteUserInteractor;