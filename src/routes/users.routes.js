const { Router } = require("express")

const usersRoutes = Router()

usersRoutes.post("/", (request, response) => {
  const { name, email, password } = request.body;


  response.send(`Usuario: ${name}. - E-mail: ${email}. E a senha e: ${password}`)
})

module.exports = usersRoutes;
