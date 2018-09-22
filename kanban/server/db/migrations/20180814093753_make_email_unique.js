exports.up = function(knex, Promise) {
  return knex.schema.alterTable('users', table => {
    table.unique('email');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropColumn('email');
};
