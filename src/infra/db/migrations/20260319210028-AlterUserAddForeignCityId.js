'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.addColumn('users', 'city_id', {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: 'cities',
        key: 'id'
      },
      onUpdate: 'CASCADE',
      onDelete: 'RESTRICT',
      after: 'age',
      defaultValue: 1
    });
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.removeColumn('users', 'city_id');
  }
};
