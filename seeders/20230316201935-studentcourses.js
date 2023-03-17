'use strict';
const { Student, Course, sequelize } = require('../models');
const falso = require('@ngneat/falso');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const studentcourses = await Promise.all(
      [...Array(60)].map(async () => {
        const student = await Student.findOne({ order: sequelize.random() });
        const course = await Course.findOne({ order: sequelize.random() });
        return {
          student_id: student.id,
          course_id: course.id,
          grade: falso.randNumber({ max: 4 }),
          createdAt: new Date(),
          updatedAt: new Date(),
        };
      })
    );
    return queryInterface.bulkInsert('students_courses', student_courses, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('students_courses', null, {});
  },
};