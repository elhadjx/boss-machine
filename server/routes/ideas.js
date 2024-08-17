const express = require('express')
const ideasRoute = express.Router();

const { getAllFromDatabase, addToDatabase, getFromDatabaseById, updateInstanceInDatabase, deleteFromDatabasebyId } = require('../db')

// TODO middleware to check for existing :id for routes GET PUT DELETE

ideasRoute.get('/', (req, res, next) => {
    const allMinions = getAllFromDatabase('minions')
    res.send(allMinions);
})

ideasRoute.post('/', (req, res, next) => {
    const minionInstace = req.body

    addToDatabase('minions', minionInstace)

    res.status(201).send(minionInstace)
})

ideasRoute.get('/:minionId', (req, res, next) => {
    const { minionId } = req.params

    const minion = getFromDatabaseById(minionId)

    res.status(200).send(minion)
})

ideasRoute.put('/:minionId', (req, res, next) => {
    const { minionId } = req.params
    const minion = req.body

    updateInstanceInDatabase('minions', minion)

    res.status(200).send(result)
})

ideasRoute.delete('/:minionId', (req, res, next) => {
    const { minionId } = req.params

    deleteFromDatabasebyId('minions', minionId);

    res.sendStatus(204);
})

module.exports = ideasRoute