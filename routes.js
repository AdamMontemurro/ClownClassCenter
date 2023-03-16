const Router = require('express').Router()
const controller = require('./controllers')

Router.post('/students', controller.CreateStudent)

Router.post('/course', controller.CreateCourse)

Router.get('/course', controller.GetCourses)

Router.get('/students', controller.GetAllStudents)

module.exports = Router