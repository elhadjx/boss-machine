const express = require('express')
const ideasRoute = express.Router();

const { getAllFromDatabase, addToDatabase, getFromDatabaseById, updateInstanceInDatabase, deleteFromDatabasebyId } = require('../db')


ideasRoute.param('ideasId', (req, res, next, id) => {

    const idea = getFromDatabaseById('ideas', id);
    if (idea) {
        req.idea = idea
        next()
    } else {
        res.status(404).send({ error: 'Idea not found.' })
    }
})

ideasRoute.get('/', (req, res, next) => {

    const allIdeas = getAllFromDatabase('ideas')
    res.send(allIdeas);
})

ideasRoute.post('/', (req, res, next) => {

    const ideaInstace = req.body
    addToDatabase('ideas', ideaInstace)
    res.status(201).send(ideaInstace)
})

ideasRoute.get('/:ideaId', (req, res, next) => {
    res.status(200).send(req.idea)
})

ideasRoute.put('/:ideaId', (req, res, next) => {

    const idea = req.body
    updateInstanceInDatabase('ideas', idea)
    res.status(200).send(result)
})

ideasRoute.delete('/:ideaId', (req, res, next) => {

    deleteFromDatabasebyId('ideas', req.idea.id);
    res.sendStatus(204);
})

module.exports = ideasRoute