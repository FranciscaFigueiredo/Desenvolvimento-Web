const express = require('express')
const  crypto = require('crypto')
const connection = require('./database/connection')

const routes = express.Router()

routes.get('/users', async(req, res) => {
    const users = await connection('users').select('*')

    res.json(users)
})  //vai no banco, conecta, pega a lista de usuários e retornando

// routes.post('/users/:id', (req, res) => {
//     const params = req.params
//     res.json(params)
// })

routes.post('/users', async(req, res) => {
    const {name, email, idade, empresa} = req.body
    const id = crypto.randomBytes(4).toString('HEX')

    await connection('users').insert({
        id,
        name,
        email,
        idade,
        empresa
    })

    res.json({id})
})

module.exports = routes