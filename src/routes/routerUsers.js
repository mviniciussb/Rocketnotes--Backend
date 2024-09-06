import {Router} from "express"
const appRoutes = Router()

appRoutes.get("/", (request, response) => {
    response.send("Hello, world!")
})

export default appRoutes