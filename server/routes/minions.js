const express = require('express');
const { getFromDatabaseById, getAllFromDatabase, addToDatabase, updateInstanceInDatabase, deleteFromDatabasebyId } = require('../db');
const minionsRoute = express.Router();

minionsRoute.param('minionId', (req, res, next, id) => {

    const minion = getFromDatabaseById('minions', id)

    if (minion) {
        req.minion = minion;
        next()
    } else {
        res.status(404).send()
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
    const deleted = deleteFromDatabasebyId('minions', req.minion.id)
    if (deleted) {
        res.sendStatus(204);
    } else {
        res.status(500).send()
    }
})

// WORK

minionsRoute.get('/:minionId/work', (req, res, next) => {
    const allWork = getAllFromDatabase('work').filter((work) => { return work.minionId == req.params.minionId })
    res.status(200).send(allWork)
})

minionsRoute.post('/:minionId/work', (req, res, next) => {
    const workInstance = req.body;
    addToDatabase('work', workInstance);
    res.status(201).send(workInstance)
})

minionsRoute.put('/:minionId/work/:workId',
    (req, res, next) => {
        const workId = req.params.workId;
        let work = getFromDatabaseById('work', workId);
        if (work) {
            next()
        } else {
            res.status(404).send({ error: 'Work not found.' })
            return;
        }
    }, (req, res, next) => {
        const workInstance = req.body;
        if (workInstance.minionId != req.params.minionId) {
            res.sendStatus(400)
            return;
        }
        updateInstanceInDatabase('work', workInstance);
        res.status(200).send(workInstance)
    })

minionsRoute.delete('/:minionId/work/:workId',
    (req, res, next) => {
        const workId = req.params.workId;
        let work = getFromDatabaseById('work', workId);
        if (work) {
            next()
        } else {
            res.status(404).send({ error: 'Work not found.' })
            return;
        }
    }, (req, res, next) => {
        deleteFromDatabasebyId('work', req.params.workId)
        res.sendStatus(204);
    })


module.exports = minionsRoute