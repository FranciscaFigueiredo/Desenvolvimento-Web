const  knex = require('knex')
const config = require('../../knexfile')
const { connect } = require('../routes')

connection = knex(config.development)

module.exports = connection