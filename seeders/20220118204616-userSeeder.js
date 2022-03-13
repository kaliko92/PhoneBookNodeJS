'use strict';
const bcryptjs = require('bcryptjs');
const jwt = require('jsonwebtoken');

const password1 = '123';
const hash1 = bcryptjs.hashSync(password1, 10);

const password2 = '456';
const hash2 = bcryptjs.hashSync(password2, 10);

const password3 = '789';
const hash3 = bcryptjs.hashSync(password3, 10);

const password4 = '123456789';
const hash4 = bcryptjs.hashSync(password4, 10);


module.exports = {
  // var password = hashIt('123');


  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('user', [{
      email: 'osama@hotmail.com',
      name: 'osama',
      password: hash1,
      createdAt: new Date(),
      updatedAt: new Date(),
    },{
      email: 'ahmad@hotmail.com',
      name: 'ahmad',
      password: hash2,
      createdAt: new Date(),
      updatedAt: new Date(),

    },{
      email: 'rami@hotmail.com',
      name: 'rami',
      password: hash3,
      createdAt: new Date(),
      updatedAt: new Date(),
    },{
      email: 'omar@hotmail.com',
      name: 'omar',
      password: hash4,
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('user', null, {});

  }
};


