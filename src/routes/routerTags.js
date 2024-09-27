import { Router } from "express"
import TagsController from "../controllers/TagsController.js"
const appNotesRouters = Router()




const tagsController = new TagsController()

appNotesRouters.get("/:user_id", tagsController.index)





export default appNotesRouters