// migrations/20230824000000_create_tours_table.js
exports.up = function (knex) {
    return knex.schema.createTable('tours', function (table) {
      table.increments('id').primary();
      table.string('name').notNullable();
      table.string('description').notNullable();
      table.decimal('price').notNullable();
      table.integer('duration').notNullable();
    });
  };
  
  exports.down = function (knex) {
    return knex.schema.dropTable('tours');
  };
  