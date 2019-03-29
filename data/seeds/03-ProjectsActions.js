exports.seed = function(knex, Promise) {
	// Deletes ALL existing entries
	return knex('Projects_Action').del().then(function() {
		// Inserts seed entries
		return knex('Projects_Action').insert([ { project_id: 1, action_id: 1 }, { project_id: 1, action_id: 2 } ]);
	});
};
