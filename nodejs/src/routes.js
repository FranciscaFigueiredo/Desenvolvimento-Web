const express = require('express')
const routes = express.Router()
const userController = require('./controller/userController')

routes.get('/users', userController.list)  //vai no banco, conecta, pega a lista de usuários e retornando

routes.get('/users/:id', userController.show)

routes.post('/users', userController.create)

routes.put('/users/:id', userController.update)

routes.delete('/users/:id', userController.delete)


// routes.post('/users/:id', (req, res) => {
//     const params = req.params
//     res.json(params)
// })


module.exports = routes