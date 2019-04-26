
exports.up = function(knex, Promise) {
  return knex.schema.createTable('messages', tbl => {
      tbl.increments();

      tbl.string('body').notNullable();
      tbl.string('created_at').notNullable();
      tbl.string('send_time').notNullable();
      tbl.integer('user_id').notNullable();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('messages');
};
