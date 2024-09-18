import { Router } from "express"
import usersRoutes from "./routerUsers.js"
const appRouters = Router()




appRouters.use("/users", usersRoutes)


export default appRouters
 