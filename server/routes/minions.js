const express = require('express');
const { getFromDatabaseById, getAllFromDatabase, addToDatabase, updateInstanceInDatabase, deleteFromDatabasebyId } = require('../db');
const minionsRoute = express.Router();

minionsRoute.param('minionId', (req, res, next, id) => {

    const minion = getFromDatabaseById('minions', id)

    if (minion) {
        req.minion = minion;
        next()
    } else {
        res.status(404).send({ error: 'Minion not found' })
    }

})

minionsRoute.get('/', (req, res, next) => {

    const allMinions = getAllFromDatabase('minions')
    res.status(200).send(allMinions)

})

minionsRoute.post('/', (req, res, next) => {

    const minion = req.body
    addToDatabase('minions', minion)
    res.status(201).send(minion)
})

minionsRoute.get('/:minionId', (req, res, next) => {
    res.status(200).send(req.minion)
})

minionsRoute.put('/:minionId', (req, res, next) => {
    updateInstanceInDatabase('minions', req.body)
    res.status(200).send(req.body)
})

minionsRoute.delete('/:minionId', (req, res, next) => {
    deleteFromDatabasebyId(req.minion.id)
    res.sendStatus(204);
})

module.exports = minionsRoute