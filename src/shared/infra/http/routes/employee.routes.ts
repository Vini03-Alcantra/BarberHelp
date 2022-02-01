import { Router } from "express";
import { CreateEmployeeController } from "../../../../modules/employee/useCases/CreateEmployee/CreateEmployeeController";
import { DeleteEmployeeController } from "../../../../modules/employee/useCases/DeleteEmployee/DeleteEmployeeControlller";
import { ReadEmployeeController } from "../../../../modules/employee/useCases/ReadEmployee/ReadEmployeeController";
import { UpdateEmployeeController } from "../../../../modules/employee/useCases/UpdateEmployee/UpdateEmployeeController";

const employeeRouter = Router()

const createEmployeeController = new CreateEmployeeController()
const deleteEmployeeController = new DeleteEmployeeController()
const readEmployeeController = new ReadEmployeeController()
const updateEmployeeController = new UpdateEmployeeController()

employeeRouter.post("/", createEmployeeController.handle)
employeeRouter.delete("/", deleteEmployeeController.handle)
employeeRouter.get("/", readEmployeeController.handle)
employeeRouter.patch("/", updateEmployeeController.handle)



export { employeeRouter }