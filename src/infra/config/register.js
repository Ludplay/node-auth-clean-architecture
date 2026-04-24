const { createContainer, asClass, asFunction, asValue } = require('awilix');

const UserRepository = require('../../adapters/repositories/user.rep');
const UserInteractor = require('../../interactors/users/user.bs');
const GetUserInteractor = require('../../interactors/users/get-user.bs');
const GetAllUsersInteractor = require('../../interactors/users/get-all-users.bs');
const UpdateUserInteractor = require('../../interactors/users/update-user.bs');
const DeleteUserInteractor = require('../../interactors/users/delete-user.bs');
const LoginUserInteractor = require('../../interactors/users/login-user.bs');
const db = require('../db/connection');
const models = require('../db/models');
const sequelize = require('../db/sequelize');
// const UserModel = require('../db/models/user'); 
// const CityModel = require('../db/models/city'); 

const container = createContainer();

const registerClass = (className) => asClass(className).scoped();

container.register({
    userRepository: registerClass(UserRepository),
    userInteractor: registerClass(UserInteractor),
    getUserInteractor: registerClass(GetUserInteractor),
    getAllUsersInteractor: registerClass(GetAllUsersInteractor),
    updateUserInteractor: registerClass(UpdateUserInteractor),
    deleteUserInteractor: registerClass(DeleteUserInteractor),
    loginUserInteractor: registerClass(LoginUserInteractor),

    db: asValue(db),
    models: asValue(models),
    sequelize: asValue(sequelize)
    // userModel: asFunction(UserModel, ['sequelize']).singleton(),
    // cityModel: asFunction(CityModel, ['sequelize']).singleton()
});

module.exports = container;