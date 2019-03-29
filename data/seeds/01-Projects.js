exports.seed = function(knex, Promise) {
	// Deletes ALL existing entries
	return knex('Projects').del().then(function() {
		// Inserts seed entries
		return knex('Projects').insert([
			{
				project_id: 1,
				project_name: 'Todo-App',
				project_description: 'Saves the work you have to do',
				project_completed: false
			}
		]);
	});
};
