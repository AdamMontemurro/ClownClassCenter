const { Student, Course } = require('../models')

const CreateStudent = async (req, res) => {
    try {
        let student = await Student.create(req.body)
        res.send(student)
    } catch (error) {
        throw error
    }
}
const GetAllStudents = async (req,res) => {
    try {
        const students = await Student.findAll()
        res.send(students)
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

// const GetCourse = async (req, res) => {
//     try {
//         const course = await Course.findOne({
//             where: { userId: req.params.userId },
//         })
//         res.send(course)
//     } catch (error) {
//         throw error
//     }
// }




module.exports = {
    CreateStudent,
    CreateCourse,
    GetAllStudents,
    // GetCourses,
}