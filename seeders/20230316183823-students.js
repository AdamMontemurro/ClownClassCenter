'use strict'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    let students = [
      {
        first_name: 'John',
        last_name: 'Doe',
        email: 'johndoe@example.com',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        first_name: 'Jane',
        last_name: 'Doe',
        email: 'janedoe@example.com',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        first_name: 'Bob',
        last_name: 'Smith',
        email: 'bobsmith@example.com',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        first_name: 'Samantha',
        last_name: 'Jones',
        email: 'samanthajones@example.com',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        first_name: 'Michael',
        last_name: 'Johnson',
        email: 'michaeljohnson@example.com',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        first_name: 'Emily',
        last_name: 'Davis',
        email: 'emilydavis@example.com',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        first_name: 'David',
        last_name: 'Wilson',
        email: 'davidwilson@example.com',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        first_name: 'Sarah',
        last_name: 'Brown',
        email: 'sarahbrown@example.com',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        first_name: 'Christopher',
        last_name: 'Garcia',
        email: 'christophergarcia@example.com',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        first_name: 'Jessica',
        last_name: 'Rodriguez',
        email: 'jessicarodriguez@example.com',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]

    await queryInterface.bulkInsert('students', students)
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('students')
  }
}
