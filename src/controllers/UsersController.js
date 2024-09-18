import AppError from "../utills/appError.js"

class UsersController{

    create(request, response){
        const { filme, genero, duracao, indicacao } = request.body

        if(!filme){
            throw new AppError("O nome do filme é obrigatório")
        }

        response.json({filme, genero, duracao, indicacao})
    }
}

export default UsersController