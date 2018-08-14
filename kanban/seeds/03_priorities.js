
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('priorities').del()
    .then(function () {
      // Inserts seed entries
      return knex('priorities').insert([
        {name: 'express boiler plate', rank: 3},
        {name: 'eat food', rank: 4},
        {name: 'code app', rank: 5},
      ]);
    });
};
