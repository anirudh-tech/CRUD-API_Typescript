import express from 'express';
import EmployeeController from '../controllers/EmployeeController';

const router = express.Router();

router.route('/employee')
    .get(EmployeeController.getAllEmployee)
    .post(EmployeeController.createEmployee)

router.route('/employee/:id')
    .get(EmployeeController.getEmployee)
    .put(EmployeeController.updateEmployee)
    .delete(EmployeeController.deleteEmployee)

export default router;




