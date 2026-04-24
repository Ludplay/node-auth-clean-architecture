


class GetAllUsersInteractor {

    constructor({userRepository}) {
        this.userRepository = userRepository;
    }

    async execute() {
        return await this.userRepository.getAllUsersWithCity();
    }
    
}

module.exports = GetAllUsersInteractor;