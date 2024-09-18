import { Router } from "express"
import UsersController from "../controllers/UsersController.js"
const appUserRouters = Router()




const userController = new UsersController()


appUserRouters.post("/", userController.create)



export default appUserRouters