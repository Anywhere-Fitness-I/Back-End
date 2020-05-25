const bcrypt = require("bcryptjs");

exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex("users")
    .delete()
    .then(function () {
      // Inserts seed entries
      return knex("users").insert([
        {
          firstName: "instructor",
          lastName: "test",
          password: bcrypt.hashSync("pass", 4),
          email: "instructor@test.com",
          role: "instructor",
        },
        {
          firstName: "client",
          lastName: "test",
          password: bcrypt.hashSync("pass", 4),
          email: "client@test.com",
          role: "client",
        },
        {
          firstName: "instructor2",
          lastName: "test",
          password: bcrypt.hashSync("pass", 4),
          email: "test@instructor.com",
          role: "instructor",
        },
      ]);
    });
};
