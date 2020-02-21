const db = require('../dbConfig');

module.exports = {
  get,
  insert,
  update,
  remove,
  getProjecttasks
};

function get(id) {
  let proj = db('projects');

  if (id) {
    proj.where('projects.id', id).first();
    const proj_and_Tasks = [proj, getProjecttasks(id)]; // brings back projects and tasks
    return Promise.all(proj_and_Tasks).then(results => {
      let [project, tasks] = results;

      if (project) {
        project.tasks = tasks;

        return {
          ...project,
          completed: project.completed === 1 ? true : false
        };
      } else {
        return null;
      }
    });
  } else {
    return proj.then(projects => {
      return projects.map(project => {
        return {
          ...project,
          completed: project.completed === 1 ? true : false
        };
      });
    });
  }
}

function insert(projects) {
  return db('projects')
    .insert(projects, 'id')
    .then(([id]) => get(id));
}

function update() {}

function remove() {}

function getProjecttasks(projectId) {
  return db('tasks')
    .where('project_id', projectId)
    .then(tasks =>
      tasks.map(task => {
        return { ...task, completed: task.completed === 1 ? true : false };
      })
    );
}
