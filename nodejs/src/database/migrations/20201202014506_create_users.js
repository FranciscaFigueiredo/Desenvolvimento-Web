
exports.up = function(knex) {   //o que vai fazer ao iniciar o banco, onde vamos popular os dados
    return knex.schema.createTable('users', (table) => {
        table.string('id').primary()
        table.string('name').notNullable()
        table.string('email').notNullable()
        table.integer('idade')
        table.string('empresa')

    })

};

exports.down = function(knex) {   //como desfazer modificações se algo der errado
    return knex.schema.dropTable('users')
};
