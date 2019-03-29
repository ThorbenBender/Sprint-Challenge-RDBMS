exports.up = function(knex, Promise) {
	return knex.schema.createTable('Projects', (table) => {
		table.increments('project_id');
		table.string('project_name', 128).notNullable().unique();

		table.string('project_description', 128).notNullable().unique();

		table.boolean('project_completed');
	});
};

exports.down = function(knex, Promise) {
	return knex.schema.dropTableIfExists('Projects');
};
