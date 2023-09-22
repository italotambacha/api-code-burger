// const app = require("./app") o node lê desse modo, o react lê como abaixo (é a mesma coisa, mas o de baixo é mais moderno) para fazer o node entender assim instalar (yarn add sucrase -D)

import app from './app'

// app.listen(3001)

app.listen(3001, () => console.log('Servidor rodando'))
