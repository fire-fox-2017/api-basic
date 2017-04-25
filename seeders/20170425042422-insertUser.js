'use strict';

module.exports = {

  up: function (queryInterface, Sequelize) {

    var data = [{
      name: "John Doe",
      username: "jdoe",
      email:"jdoe@gmail.com",
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    },{
      name: "Eltina Widasari",
      username: "imoet",
      email:"eltinawh@gmail.com",
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    },{
      name: "Parel Hutahaean",
      username: "ahadonadidokmu_geminiboy",
      email:"parel.hutahaean@gmail.com",
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    },{
      name: "Ivana Habibah",
      username: "cutemaniezz",
      email:"ivanahabibah@gmail.com",
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    },{
      name: "Stedy Yulius",
      username: "imsteady",
      email:"stedy_yulius@gmail.com",
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    }]

    return queryInterface.bulkInsert('Users', data, {});
  },

  down: function (queryInterface, Sequelize) {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
  }
};
