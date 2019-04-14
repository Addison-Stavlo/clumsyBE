exports.up = function(knex, Promise) {
  return knex.schema.createTable("clumsyScores", tbl => {
    tbl.increments();
    tbl.string("name");
    tbl.float("score");
    tbl.timestamp(true, true);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("clumsyScores");
};
