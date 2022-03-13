'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('contact', [{
      id: 1,
      type: 'phone',    
      value: '03/456987',    
      parentId: 1,    
      createdAt: new Date(),
      updatedAt: new Date(),
    },{
      id: 2,
      type: 'phone',    
      value: '81/456987',    
      parentId: 1,    
      createdAt: new Date(),
      updatedAt: new Date(),
    },{
      id: 3,
      type: 'phone',    
      value: '01/456987',    
      parentId: 2,    
      createdAt: new Date(),
      updatedAt: new Date(),
    },{
      id: 4,
      type: 'email',    
      value: 'taisirrawad123@gmail.com',    
      parentId: 3,    
      createdAt: new Date(),
      updatedAt: new Date(),
    },{
      id: 5,
      type: 'phone',    
      value: '03/785689',    
      parentId: 4,    
      createdAt: new Date(),
      updatedAt: new Date(),
    },{
      id: 6,
      type: 'phone',    
      value: '81/235867',    
      parentId: 5,    
      createdAt: new Date(),
      updatedAt: new Date(),
    },{
      id: 7,
      type: 'phone',    
      value: '87/854698',    
      parentId: 6,    
      createdAt: new Date(),
      updatedAt: new Date(),
    },{
      id: 8,
      type: 'phone',    
      value: '01/458674',    
      parentId: 7,    
      createdAt: new Date(),
      updatedAt: new Date(),
    },{
      id: 9,
      type: 'phone',    
      value: '03/135876',    
      parentId: 8,    
      createdAt: new Date(),
      updatedAt: new Date(),
    },{
      id: 10,
      type: 'phone',    
      value: '81/666022',    
      parentId: 9,    
      createdAt: new Date(),
      updatedAt: new Date(),
    },{
      id: 11,
      type: 'fax',    
      value: '01/147785',    
      parentId: 9,    
      createdAt: new Date(),
      updatedAt: new Date(),
    },{
      id: 12,
      type: 'phone',    
      value: '03/030845',    
      parentId: 10,    
      createdAt: new Date(),
      updatedAt: new Date(),
    },{
      id: 13,
      type: 'email',    
      value: 'yaserfarhan87@gmail.com',    
      parentId: 10,    
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('contact', null, {});

  }
};
