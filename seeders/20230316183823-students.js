'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

    let students = [
      {
        id: 1,
        first_name: 'John',
        last_name: 'Doe',
        email: 'johndoe@example.com'
      },
      {
        id: 2,
        first_name: 'Jane',
        last_name: 'Doe',
        email: 'janedoe@example.com'
      },
      {
        id: 3,
        first_name: 'Bob',
        last_name: 'Smith',
        email: 'bobsmith@example.com'
      },
      {
        id: 4,
        first_name: 'Samantha',
        last_name: 'Jones',
        email: 'samanthajones@example.com'
      },
      {
        id: 5,
        first_name: 'Michael',
        last_name: 'Johnson',
        email: 'michaeljohnson@example.com'
      },
      {
        id: 6,
        first_name: 'Emily',
        last_name: 'Davis',
        email: 'emilydavis@example.com'
      },
      {
        id: 7,
        first_name: 'David',
        last_name: 'Wilson',
        email: 'davidwilson@example.com'
      },
      {
        id: 8,
        first_name: 'Sarah',
        last_name: 'Brown',
        email: 'sarahbrown@example.com'
      },
      {
        id: 9,
        first_name: 'Christopher',
        last_name: 'Garcia',
        email: 'christophergarcia@example.com'
      },
      {
        id: 10,
        first_name: 'Jessica',
        last_name: 'Rodriguez',
        email: 'jessicarodriguez@example.com'
      }
    ];

    await queryInterface.bulkInsert('students', students)

  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('students')
  }
};
