
exports.up = function(knex, Promise) {
    return Promise.all([knex.schema.createTable('users', table => {
        table.increments('id');
        table.string('username');
        table.string('email');
        table.string('password');
        table.string('picture');
        table.string('uuid');
        table.timestamp('created_at', knex.fn.now());
        table.timestamp('updated_at', knex.fn.now());
     })
    ])
};

exports.down = function(knex, Promise) {
    return knex.schema
    .dropTableIfExists('users');
};
