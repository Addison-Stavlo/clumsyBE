const faker = require("faker");

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("clumsy_scores")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("clumsy_scores").insert([
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
