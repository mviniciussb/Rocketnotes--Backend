import { Router } from "express"
import UsersController from "../controllers/UsersController.js"



const appUserRouters = Router()



function myMiddleware(request, response, next){
    console.log("Você passou pelo middleware");

    if(request.body.indicacao != "livre"){
        return response.json({message: "Verificar classificação indicativa no cartaz."})
    }

    next()
}


const userController = new UsersController()

appUserRouters.post("/", myMiddleware, userController.create)



export default appUserRouters