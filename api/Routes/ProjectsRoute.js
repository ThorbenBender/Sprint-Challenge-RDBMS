const knex = require('knex');
const express = require('express');

const knexConfig = require('../../knexfile').development;

const db = knex(knexConfig);

const routes = express.Router();

routes.use(express.json());

routes.get('/:id', async (req, res) => {
	try {
		data = await db('Projects')
			.where({ project_id: req.params.id })
			.innerJoin('Actions', 'Projects.project_id', 'Actions.project_id');
		if (data) {
			res.status(200).json(data);
		}
	} catch (error) {
		console.log(error);
		res.status(500).json({ message: 'Error getting the data' });
	}
});

routes.post('', async (req, res) => {
	try {
		project = await db('Projects').insert(req.body);
		if (project) {
			res.status(200).json(project);
		}
	} catch (error) {
		console.log(error);
		res.status(500).json({ error: 'Could not add new data' });
	}
});

module.exports = routes;
