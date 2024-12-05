import { Router } from "express"
import usersRoutes from "./routerUsers.js"
import notesRoutes from "./routerNotes.js"
import tagsRoutes from "./routerTags.js"
import sessionsRoutes from "./sessions.routes";
const appRouters = Router()




appRouters.use("/users", usersRoutes)
appRouters.use("/sessions", sessionsRoutes);
appRouters.use("/notes", notesRoutes)
appRouters.use("/tags", tagsRoutes)





export default appRouters
 