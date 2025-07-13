import express from 'express';
import {
    createStudent,
    getAllStudents,
    getStudentById,
    updateStudent,
    deleteStudent,
    // registerStudent,
    // loginStudent
} from '../controllers/student.controller.js';
import validation from '../middleware/validation.js';

const router = express.Router();

router.use(validation);

router.post('/', createStudent);
router.get('/', getAllStudents);
router.get('/:id', getStudentById);
router.put('/:id', updateStudent);
router.delete('/:id', deleteStudent);

export default router;
