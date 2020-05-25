exports.up = function (knex) {
  return knex.schema.createTable("classes", (table) => {
    table.increments();
    table.string("name").notNullable();
    table.string("type").notNullable();
    table.string("date").notNullable();
    table.string("startTime").notNullable();
    table.string("duration").unsigned().notNullable();
    table.string("intensityLevel").notNullable();
    table.string("location").notNullable();
    table.string("description", 10000).notNullable();
    table.integer("registeredAttendees").unsigned().defaultTo(0);
    table.integer("maxClassSize").unsigned().notNullable().defaultTo(20);
    table.string("image");
    table
      .integer("instructorId")
      .unsigned()
      .notNullable()
      .references("id")
      .inTable("users")
      .onUpdate("CASCADE")
      .onDelete("CASCADE");
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("classes");
};
