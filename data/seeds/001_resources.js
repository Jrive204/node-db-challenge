exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('resources')
    .del()
    .then(function() {
      // Inserts seed entries
      return knex('resources').insert([
        { resource_name: 'computer' },
        { resource_name: 'Vincent', resource_description: 'WORK' },
        { resource_name: 'Conference-Room' }
      ]);
    });
};
