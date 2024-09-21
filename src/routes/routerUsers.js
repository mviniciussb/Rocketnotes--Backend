import { Router } from "express"
import UsersController from "../controllers/UsersController.js"
const appUserRouters = Router()




const userController = new UsersController()


appUserRouters.post("/", userController.create)
appUserRouters.put("/:id", userController.update)




export default appUserRouters