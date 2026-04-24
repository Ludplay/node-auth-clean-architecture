
class User {
    constructor({name, date, age, email, password}) {

        this.entityValidate(name, date, age, email, password);

        this.name = name;
        this.date = date;
        this.age = age;
        this.email = email;
        this.password = password;
    } 

    entityValidate(name, date, age) {

        if (!name || typeof name !== 'string' || name.length < 3) {
            throw new Error('Invalid name');
        }

        if(!age || typeof age !== 'number') {
            throw new Error('Invalid age');
        } else if (age < 18) {
            throw new Error('User must be at least 18 years old');
        }
    }

    isAdult() {
        return this.age >= 18;
    }
}

module.exports = User;