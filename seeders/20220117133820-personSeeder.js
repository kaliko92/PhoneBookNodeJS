'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('person', [{
      id: 1,
      name: 'Ahmed Yasin',    
      createdAt: new Date(),
      updatedAt: new Date(),
    },{
      id: 2,
      name: 'Basel hariri',    
      createdAt: new Date(),
      updatedAt: new Date(),
    },{
      id: 3,
      name: 'Taisir rawad',    
      createdAt: new Date(),
      updatedAt: new Date(),
    },{
      id: 4,
      name: 'Fadi marjan',    
      createdAt: new Date(),
      updatedAt: new Date(),
    },{
      id: 5,
      name: 'Firas assad',    
      createdAt: new Date(),
      updatedAt: new Date(),
    },{
      id: 6,
      name: 'Hisham dirwani',    
      createdAt: new Date(),
      updatedAt: new Date(),
    },{
      id: 7,
      name: 'Hisham Harari',    
      createdAt: new Date(),
      updatedAt: new Date(),
    },{
      id: 8,
      name: 'Monair Mansour',    
      createdAt: new Date(),
      updatedAt: new Date(),
    },{
      id: 9,
      name: 'Morad Kishani',    
      createdAt: new Date(),
      updatedAt: new Date(),
    },{
      id: 10,
      name: 'Yaser Farhan',    
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('person', null, {});

  }
};
