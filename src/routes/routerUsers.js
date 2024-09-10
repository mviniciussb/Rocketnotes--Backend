import { Router } from "express"



const appUserRouters = Router()

appUserRouters.post("/", (request, response) => {
    const { filme, genero, duracao, indicacao } = request.body

    response.json({filme, genero, duracao, indicacao})
})



export default appUserRouters