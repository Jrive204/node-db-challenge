const express = require('express');

const ProjectsRouter = require('../routes/Project-Router');

const server = express();

server.use(express.json());
server.use('/api/projects', ProjectsRouter);

module.exports = server;
