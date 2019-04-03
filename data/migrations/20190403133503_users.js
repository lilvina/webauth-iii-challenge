
exports.up = function(knex, Promise) {
  return knex.schema.createTable('users', tbl => {
    tbl.increments()

    tbl
      .string('users', 255)
      .notNullable()
      .unique()

    tbl
      .string('password', 128)
      .notNullable()
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('users')
};
