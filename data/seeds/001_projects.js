exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('projects')
    .del()
    .then(function() {
      // Inserts seed entries
      return knex('projects').insert([
        {
          name: 'Complete Sprint',
          description: 'Build and Awesome API !'
        },
        {
          name: 'Complete Party',
          description: 'Will go party after this!'
        },
        {
          name: 'Checking Description'
        }
      ]);
    });
};
