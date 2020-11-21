const express = require(" express ")

const app = express()
app.use(express.json())

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

app.get('/users', (req, res) => {
    const params = req.query

    res.json(params)
})

app.post('/users/:id', (req, res) => {
    const params = req.params
    res.json(params)
})

app.post('/users', (req, res) => {
    const params = req.body
    res.json(params)
})

app.listener(3001)

