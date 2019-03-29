exports.up = function(knex, Promise) {
	return knex.schema.createTable('Actions', (table) => {
		table.increments('action_id');

		table.string('action_description', 128).unique().notNullable();

		table.string('action_notes', 128).notNullable().unique();

		table.boolean('action_completed');

		table.integer('project_id').references('project_id').inTable('Projects').notNullable();
	});
};

exports.down = function(knex, Promise) {
	return knex.schema.dropTableIfExists('Actions');
};
