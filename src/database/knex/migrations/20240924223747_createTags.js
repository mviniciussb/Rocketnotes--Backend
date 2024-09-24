export const up = knex => knex.schema.createTable("tags", table => {
    table.increments("id");
    table.text("name").notNullable();
    table.integer("notes_id").references("id").inTable("notes").onDelete("CASCADE");
    table.integer("user_id").references("id").inTable("users");

});

export const down = knex => knex.schema.dropTable("tags", table => {
    
});
