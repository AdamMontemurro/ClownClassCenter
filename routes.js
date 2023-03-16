const Router = require('express').Router()
const controller = require('./controllers')

Router.post('/', controller.CreateStudent)

Router.post('/course', controller.CreateCourse)

Router.get('/students', controller.GetAllStudents)

module.exports = Router