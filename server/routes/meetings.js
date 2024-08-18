const express = require('express');
const { getAllFromDatabase, createMeeting, deleteAllFromDatabase, addToDatabase } = require('../db');
const meetingsRoute = express.Router();

meetingsRoute.get('/', (req, res, next) => {
    const meetings = getAllFromDatabase('meetings')
    res.status(200).send(meetings);
})

meetingsRoute.post('/', (req, res, next) => {
    const meeting = createMeeting()
    let newMeeting = addToDatabase('meetings', meeting);
    res.status(201).send(newMeeting);
})

meetingsRoute.delete('/', (req, res, next) => {
    deleteAllFromDatabase('meetings');
    res.sendStatus(204)
})


module.exports = meetingsRoute