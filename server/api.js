const express = require('express');
const apiRouter = express.Router();

const ideasRoute = require('./routes/ideas')
const minionsRoute = require('./routes/minions')
const meetingsRoute = require('./routes/meetings')

apiRouter.use('/ideas', ideasRoute)
apiRouter.use('/minions', minionsRoute)
apiRouter.use('/meetings', meetingsRoute)

module.exports = apiRouter;
