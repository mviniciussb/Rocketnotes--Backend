import { Router } from "express"
import NotesController from "../controllers/NotesController.js"
const appNotesRouters = Router()




const notesController = new NotesController()


appNotesRouters.post("/:user_id", notesController.create)



export default appNotesRouters