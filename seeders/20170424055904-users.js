'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
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
      fullname: 'John Wick',
      email: 'wick@mail.com',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      fullname: 'John Doe',
      email: 'doe@mail.com',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      fullname: 'John Bro',
      email: 'bro@mail.com',
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },

  down: function (queryInterface, Sequelize) {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
    return queryInterface.bulkDelete('Users', null, {});
  }
};
