const faker = require("faker");

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("clumsyScores")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("clumsyScores").insert([
        {
          name: `${faker.name.firstName()} ${faker.name.lastName()}`,
          score: 1000 + Math.random() * 10000
        },
        {
          name: `${faker.internet.userName()}`,
          score: 1000 + Math.random() * 10000
        },
        {
          name: `${faker.name.firstName()} ${faker.name.lastName()}`,
          score: 1000 + Math.random() * 10000
        },
        {
          name: `${faker.internet.userName()}`,
          score: 1000 + Math.random() * 10000
        },
        {
          name: `${faker.name.firstName()} ${faker.name.lastName()}`,
          score: 1000 + Math.random() * 10000
        },
        {
          name: `${faker.internet.userName()}`,
          score: 1000 + Math.random() * 10000
        },
        {
          name: `${faker.name.firstName()} ${faker.name.lastName()}`,
          score: 1000 + Math.random() * 10000
        },
        {
          name: `${faker.internet.userName()}`,
          score: 1000 + Math.random() * 10000
        },
        {
          name: `${faker.name.firstName()} ${faker.name.lastName()}`,
          score: 1000 + Math.random() * 10000
        },
        {
          name: `${faker.internet.userName()}`,
          score: 1000 + Math.random() * 10000
        },
        {
          name: `${faker.name.firstName()} ${faker.name.lastName()}`,
          score: 1000 + Math.random() * 10000
        },
        {
          name: `${faker.internet.userName()}`,
          score: 1000 + Math.random() * 10000
        },
        {
          name: `${faker.name.firstName()} ${faker.name.lastName()}`,
          score: 1000 + Math.random() * 10000
        },
        {
          name: `${faker.internet.userName()}`,
          score: 1000 + Math.random() * 10000
        },
        {
          name: `${faker.name.firstName()} ${faker.name.lastName()}`,
          score: 1000 + Math.random() * 10000
        },
        {
          name: `${faker.internet.userName()}`,
          score: 1000 + Math.random() * 10000
        }
      ]);
    });
};
