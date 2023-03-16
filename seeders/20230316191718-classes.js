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
        name: "Clown Fundamentals", course_code: "CF101",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Physical Comedy", course_code: "PC201",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Juggling", course_code: "JG101",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Balloon Twisting", course_code: "BT301",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Slapstick Comedy", course_code: "SC401",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Clown Make-Up", course_code: "MU201",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Improvisation", course_code: "IV301",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Prop Building", course_code: "PB101",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Silly Songs", course_code: "SS401",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Character Development", course_code: "CD201",
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
