exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('tasks')
    .del()
    .then(function() {
      // Inserts seed entries
      return knex('tasks').insert([
        {
          project_id: 1,
          task_name: 'Testing task name',
          task_description: 'Fork and Clone Repository',
          task_notes:
            'Remember to cd into the folder where the Project was cloned'
        },
        {
          project_id: 1,
          task_name: 'Testing task name twice!!',
          task_description: 'Fork and Clone Repository AGAIN',
          task_notes:
            'Remember to cd into the folder where the Project was cloned',
          resource_id: 2
        },
        {
          project_id: 1,
          task_name: 'TESTING RESOURCES',
          task_description: 'Always FORK',
          task_notes:
            'Remember to cd into the folder where the Project was cloned',
          resource_id: 1
        },
        {
          project_id: 2,
          task_name: 'Testing task name',
          task_description: 'Fork and Clone Repository',
          resource_id: 2
        }
      ]);
    });
};
