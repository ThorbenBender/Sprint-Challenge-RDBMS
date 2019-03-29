exports.up = function(knex, Promise) {
	return knex.schema.createTable('Projects_Action', (table) => {
		table.integer('project_id').references('project_id').inTable('Projects');

		table.integer('action_id').references('action_id').inTable('Actions');
	});
};

exports.down = function(knex, Promise) {
	knex.schema.dropTableIfExists('Projects_Action');
};
