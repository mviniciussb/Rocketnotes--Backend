import { Router } from "express"
import NotesController from "../controllers/NotesController.js"
const appNotesRouters = Router()




const notesController = new NotesController()

appNotesRouters.get("/", notesController.index)
appNotesRouters.post("/:user_id", notesController.create)
appNotesRouters.get("/:id", notesController.show)
appNotesRouters.delete("/:id", notesController.delete)





export default appNotesRouters