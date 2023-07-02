const knex = require("../db/connection");

//create
function create(newReservation) {
    return knex("reservations")
        .insert(newReservation)
        .returning("*")
        .then((createdRecords) => createdRecords[0])
}

//read
function list() {
    console.log("service")
    return knex("reservations")
        .select("*")
}

//update

//delete

module.exports = {
    create, 
    list,
}