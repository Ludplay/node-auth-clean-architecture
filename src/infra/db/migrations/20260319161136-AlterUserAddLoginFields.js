'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

    const alter1 = queryInterface.addColumn('users', 'email', {
      type: Sequelize.STRING(150),
      allowNull: false,
      after: 'age'
    });

    const alter2 = queryInterface.addColumn('users', 'password', {
      type: Sequelize.STRING(255),
      allowNull: false,
      after: 'email'
    });

    return Promise.all([
      alter1,
      alter2
    ]);

  },

  async down (queryInterface, Sequelize) {
    return Promise.all([
      queryInterface.removeColumn('users', 'email'),
      queryInterface.removeColumn('users', 'password')
    ]);
  }
};
