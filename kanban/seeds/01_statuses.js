
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('statuses').del()
    .then(function () {
      // Inserts seed entries
      return knex('statuses').insert([
        {name: 'done', rank: 3},
        {name: 'notdone', rank: 1},
        {name: 'inprogress', rank: 2}
      ]);
    });
};
