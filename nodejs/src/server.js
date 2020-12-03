const express = require(' express ')
const routes = require(' ./routes ')
const cors = require(' cors ')

app.use(cors())

/**
 * Driver: Select * from users:
 * Query Builders: table('users').select('*').where(' ')   /notação js/independente de banco
 */


const app = express()
app.use(express.json())

app.use(routes)

/*
 * GET: buscar ou listar uma informação no backend
 * POST: criar uma informação no backend
 * PUT: alterar uma informação no backend
 * DELETE: deletar uma informação no backend 
 */

/*
 * Parâmetros
 * Query: recebe os parâmetros enviados na rota
 * Route params: parâmetros utilizados para identificar um recurso
 * Request Body: corpo da requisição
 */



app.listener(3001)

