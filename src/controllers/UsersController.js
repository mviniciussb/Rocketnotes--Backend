class UsersController{
    /*
    * Index = GET para listar varios registros
    * Show = GET para exibir um registro especifico
    * Create = POST para criar um registro
    * Update = PUT para atualizar um registro
    * Delete = DELE para remover um registro
    */

    create(request, response){
        const { filme, genero, duracao, indicacao } = request.body

        response.json({filme, genero, duracao, indicacao})
    }
}

export default UsersController