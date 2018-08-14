
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {first_name: 'bob', last_name: 'ert', email: 'bob@ert.com'},
        {first_name: 'jeff', last_name: 'ert', email: 'jeff@ert.com'},
        {first_name: 'steve', last_name: 'ert', email: 'steve@ert.com'},
      ]);
    });
};
