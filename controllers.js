const { Student, Course, StudentCourse } = require('./models')

const CreateStudent = async (req, res) => {
    try {
        let student = await Student.create(req.body)
        res.send(student)
    } catch (error) {
        throw error
    }
}
const GetAllStudents = async (req, res) => {
    try {
        const students = await Student.findAll()
        res.send(students)
    } catch (error) {
        throw error
    }
}

const GetOneStudent = async (req, res) => {
    try {
        let id = parseInt(req.params.id)
      const student = await Student.findAll({
        where: { id: id },
      })
      res.send(student)
    } catch (error) {
      throw error
    }
  }



const CreateCourse = async (req, res) => {
    try {
        let course = await Course.create(req.body)
        res.send(course)
    } catch (error) {
        throw error
    }
}

const GetCourses = async (req, res) => {
    try {
        const course = await Course.findAll()
        res.send(course)
    } catch (error) {
        throw error
    }
}

const GetAllStudentsGrades = async (req, res) => {
    try {
        let id = parseInt(req.params.student_id)
      const studentgrade = await StudentCourse.findAll({
        where: { student_id: id },
      })
      res.send(studentgrade)
    } catch (error) {
        throw error
    }
}



module.exports = {
    CreateStudent,
    CreateCourse,
    GetAllStudents,
    GetCourses,
    GetAllStudentsGrades,
    GetOneStudent
}