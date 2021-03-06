const db = require("../config/dbConfig");

module.exports = {
  addUser: function (user) {
    return db("users")
      .insert(user)
      .returning("id")
      .then(([id]) => {
        return this.findUserBy({ id });
      });
  },
  findUserBy: function (filter) {
    return db("users").where(filter).first();
  },
  addClass: function (userClass) {
    return db("classes")
      .insert(userClass)
      .returning("id")
      .then(([id]) => {
        return this.findClassBy({ id }).first();
      });
  },
  editClass: function (id, changes) {
    return db("classes")
      .where({ id })
      .update(changes)
      .then(() => {
        return this.findClassBy({ id }).first();
      });
  },
  removeClass: function (id) {
    return db("classes").where({ id }).delete();
  },
  findClass: function () {
    return db("classes as c")
      .leftJoin("users as u", "c.instructorId", "u.id")
      .select(
        "c.id",
        "name",
        "type",
        "date",
        "startTime",
        "duration",
        "intensityLevel",
        "location",
        "registeredAttendees",
        "maxClassSize",
        "firstName",
        "lastName",
        "description"
      );
  },
  findClassBy: function (filter) {
    return db("classes").where(filter);
  },
  addReservation: function (reservation) {
    let id = reservation.classId;
    return db("reservations")
      .insert(reservation)
      .returning(["userId", "classId"])
      .then(() => {
        return this.findClassBy({ id });
      });
  },
  getreservations: function (id) {
    return db("reservations as r")
      .leftJoin("classes as c", "r.classId", "c.id")
      .leftJoin("users as u", "c.instructorId", "u.id")
      .select(
        "classId",
        "name",
        "type",
        "date",
        "startTime",
        "duration",
        "intensityLevel",
        "location",
        "registeredAttendees",
        "maxClassSize",
        "firstName",
        "lastName",
        "description"
      )
      .where("r.userId", id);
  },
  deleteReservation: function (reservation) {
    return db("reservations").where(reservation).delete();
  },
};
