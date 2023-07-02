const knex = require("../db/connection");

//create
function create(newReservation) {
    return knex("reservations")
        .insert(newReservation)
        .returning("*")
        .then((createdRecords) => createdRecords[0])
}

//read

//update

//delete