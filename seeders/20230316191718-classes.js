'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
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
        name: 'Clown Makeup',
        course_code: 'MU101',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Intermediate Clown Makeup',
        course_code: 'MU201',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Advanced Clown Makeup',
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
      },

    ];

    const clownSchoolCourses = [
      {
        name: "Clown Fundamentals", code: "CF101",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Physical Comedy", code: "PC201",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Juggling", code: "JG101",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Balloon Twisting", code: "BT301",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Slapstick Comedy", code: "SC401",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Clown Make-Up", code: "MU201",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Improvisation", code: "IV301",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Prop Building", code: "PB101",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Silly Songs", code: "SS401",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Character Development", code: "CD201",
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ];


    await queryInterface.bulkInsert('courses', courses)
    await queryInterface.bulkInsert('courses', clownSchoolCourses )
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('courses')
  }
};
