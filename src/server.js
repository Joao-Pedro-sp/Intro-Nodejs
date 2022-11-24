const express = require('express')

const app = express()
app.use(express.json())

app.post("/users", (request, response) => {
  const { name, email, password } = request.body;


  response.send(`Usuario: ${name}. - E-mail: ${email}. E a senha e: ${password}`)
})

const PORT = 3333
app.listen(PORT, () => console.log(`Server is ronning on Port ${PORT}`))