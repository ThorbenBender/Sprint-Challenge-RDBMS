const express = require('express');
const knex = require('knex');
const knexConfig = require('../../knexfile').development;

const db = knex(knexConfig);

const routes = express.Router();

routes.use(express.json());

routes.post('', async (req, res) => {
	try {
		action = await db('Actions').insert(req.body);
		if (action) {
			res.status(201).json(action);
		}
	} catch (error) {
		console.log(error);
		res.status(500).json({ message: 'Error at adding the action' });
	}
});

module.exports = routes;
