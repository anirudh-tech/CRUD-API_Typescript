import express,{ request, response } from "express";
import { EmployeeModel } from "../db/employee";

class EmployeeController {

    getAllEmployee = async (request: express.Request, response: express.Response) => {
        try {
            console.log("hello its here");
            
            const employees = await EmployeeModel.find()
            return response.status(200).json({data: employees})
        } catch (error) {
            return response.sendStatus(400)
        }
    }


    getEmployee = async (request: express.Request, response: express.Response) => {
        try {
            const {id} = request.params;
            const employees = await EmployeeModel.findById(id)
            return response.status(200).json({data: employees})
        } catch (error) {
            return response.sendStatus(400)
        }
    }

    createEmployee = async (request: express.Request, response: express.Response) => {
        try {
            console.log("its here");
            
            const {name, email, mobile} = request.body;
            const dob = new Date()
            const doj = new Date()

            const employee = new EmployeeModel({
                name,
                email,
                mobile,
                dob,
                doj
            });

            await employee.save()
            return response.status(201).json({message: "employee created", data: employee})
        } catch (error) {
            return response.sendStatus(400)
        }
    }

    updateEmployee = async (request: express.Request, response: express.Response) => {
        try {
            const {id} = request.params;
            const {name, email, mobile, dob, doj} = request.body
            const employee = await EmployeeModel.findByIdAndUpdate(id,request.body)

            return response.status(200).json({message: "employee updated", data: employee})
        } catch (error) {
            return response.sendStatus(400)
        }
    }

    deleteEmployee = async (request: express.Request, response: express.Response) => {
        try {
            const {id} = request.params;
            const employee = await EmployeeModel.findByIdAndDelete(id)
            return response.status(200).json({message: "employee deleted"})
        } catch (error) {
            return response.sendStatus(400)
        }
    }
}

export default new EmployeeController();