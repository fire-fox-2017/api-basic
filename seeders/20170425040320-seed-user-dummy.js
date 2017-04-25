'use strict';

module.exports = {
  up: function(queryInterface, Sequelize) {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('Person', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
    return queryInterface.bulkInsert('Users', [{
      name: 'John Doe',
      age: 12,
      email: 'John@gmail.com',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'Kemal',
      age: 22,
      email: 'Kemal@gmail.com',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'Tora',
      age: 15,
      email: 'Tora@gmail.com',
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },

  down: function(queryInterface, Sequelize) {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
  }
};
