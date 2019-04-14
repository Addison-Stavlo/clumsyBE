exports.up = function(knex, Promise) {
  return knex.schema.createTable("clumsy_scores", tbl => {
    tbl.increments();
    tbl.string("name");
    tbl.float("score");
    tbl.timestamp(true, true);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("clumsyScores");
};
