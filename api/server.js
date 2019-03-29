const express = require('express');
const helmet = require('helmet');
const ProjectRoute = require('./Routes/ProjectsRoute');
const ActionRoute = require('./Routes/ActionsRoute');

const server = express();

server.use(express.json());

server.use(helmet());

server.use('/api/projects', ProjectRoute);

server.use('/api/actions', ActionRoute);

module.exports = server;
