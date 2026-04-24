
class UserRepository {

    constructor({ models, sequelize }) {
        this.userModel = models.User;
        this.cityModel = models.City;
        this.sequelize = sequelize;
    }

    async create(user) {
        
        const created = await this.userModel.create(user);

        const response = {
            id: created.id,
            date: Date.now(),
            ...user
        };

        return response;
    }

    async getAllUsersWithCity() {
        const query = 'SELECT users.*, cities.name as city FROM users INNER JOIN cities ON users.city_id = cities.id';
        const [results] = await this.sequelize.query(query);
        return results;
    }

    async getUser(userId) {
        const options = {
            where: {
                id: userId
            },
            include: [{
                model: this.cityModel,
                as: 'city',
                attributes: ['name']
            }]
        };

        const user = await this.userModel.findOne(options);

        if (!user) {
            return null;
        }

        return user;
    }

    async getAllUsers() {

        const users = await this.userModel.findAll();

        return users;
    }

    async updateUser(userId, userData) {
        const options = {
            where: {
                id: userId
            }
        };

        const [rowsUpdated] = await this.userModel.update(userData, options);

        if (rowsUpdated === 0) {
            return null;
        }

        return await this.getUser(userId);
    }

    async deleteUser(userId) {
        const options = {
            where: {
                id: userId
            }
        };

        const response = await this.userModel.destroy(options);

        if(response === 0) {
            return false;
        }

        return true;
    }

    async findByEmail(email) {
        const options = {
            where: {
                email
            }
        };

        const user = await this.userModel.findOne(options);

        if (!user) {
            return null;
        }

        return user;
    }

}

module.exports = UserRepository;