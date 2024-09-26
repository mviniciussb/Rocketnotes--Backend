import { Router } from "express"
import usersRoutes from "./routerUsers.js"
import notesRoutes from "./routerNotes.js"
const appRouters = Router()




appRouters.use("/users", usersRoutes)
appRouters.use("/notes", notesRoutes)



export default appRouters
 