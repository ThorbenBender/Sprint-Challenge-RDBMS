exports.seed = function(knex, Promise) {
	// Deletes ALL existing entries
	return knex('Actions').del().then(function() {
		// Inserts seed entries
		return knex('Actions').insert([
			{ action_id: 1, action_description: 'Install express', action_notes: 'express, helmet', action_completed: false },
			{ action_id: 2, action_description: 'Create a react application', action_notes: 'react', action_completed: false }
		]);
	});
};
