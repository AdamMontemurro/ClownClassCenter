'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    let courses = [
      {
      name: 'Juggling',
      course_code: 'Jug101',
      createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Intermediate Juggling',
        course_code: 'Jug201',
        createdAt: new Date(),
        updatedAt: new Date()
        },
      {
         name: 'Advanced Juggling',
         course_code: 'Jug301',
         createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Clown Makup',
        course_code: 'MU101',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Intermediate Clown Makup',
        course_code: 'MU201',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Advanced Clown Makup',
        course_code: 'MU301',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Birthday Parties',
        course_code: 'BP101',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Intermediate Birthday Parties',
        course_code: 'BP201',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Advanced Birthday Parties',
        course_code: 'BP301',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
          name: 'Pie Throwing',
          course_code: 'PT101',
          createdAt: new Date(),
        updatedAt: new Date()
      }  
    ];
     await queryInterface.bulkInsert('courses', courses)

  },

  async down (queryInterface, Sequelize) {
   await queryInterface.bulkDelete('courses')
  }
};
