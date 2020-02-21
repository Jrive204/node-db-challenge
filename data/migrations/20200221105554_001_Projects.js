exports.up = function(knex) {
  return knex.schema

    .createTable('projects', tbl => {
      tbl.increments('id');

      tbl
        .string('name', 128)
        .unique()
        .notNullable();
      tbl.text('description');
      tbl
        .boolean('completed')
        .defaultTo(false)
        .notNullable();
    })

    .createTable('resources', tbl => {
      tbl.increments('id');

      tbl
        .string('resource_name', 128)
        .notNullable()
        .unique();
      tbl.text('resource_description');
    })
    .createTable('tasks', tbl => {
      tbl.increments();
      tbl.string('task_name').notNullable();
      tbl.text('task_description').notNullable();
      tbl.text('task_notes');
      tbl
        .boolean('completed')
        .defaultTo(false)
        .notNullable();

      tbl
        .integer('project_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('projects')
        .onUpdate('CASCADE')
        .onDelete('CASCADE');

      tbl
        .integer('resource_id')
        .unsigned()
        .references('id')
        .inTable('resources')
        .onUpdate('CASCADE')
        .onDelete('RESTRICT');
    });
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists('tasks')
    .dropTableIfExists('resources')
    .dropTableIfExists('projects');
};
