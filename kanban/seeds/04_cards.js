
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('cards').del()
    .then(function () {
      // Inserts seed entries
      return knex('cards').insert([
        { title: 'bobtitle', body: 'bobbody', priority_id: 1, status_id: 1, created_by: 1 },
        { title: 'jefftitle', body: 'jeffbody', priority_id: 1, status_id: 2, created_by: 1 },
        { title: 'stevetitle', body: 'stevebody', priority_id: 1, status_id: 3, created_by: 1 }
      ]);
    });
};
