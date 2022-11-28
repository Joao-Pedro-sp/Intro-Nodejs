const AppError = require("../utils/AppError")

class UsersController {
  async create(request, response) {
    const { name, email, password } = request.body;

    if(!name){
      throw new AppError("Nome e obrigatorio!")
    }

    response.status(201).json({ name, email, password })
  }
  /**
   * index - GET para listar varios registros.
   * show - GET para exibir um registro especifico.
   * create - POST para criar um registro.
   * update - PUT para atualizar um registro.
   * delete - DELETE para remover um registro.
   */
}

module.exports = UsersController