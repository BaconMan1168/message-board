const { Router } = require('express');
const indexRouter = Router();
const { messages } = require('../data/messageData') 

indexRouter.get('/', (req, res) => {
    res.render('index', { messages: messages})
})

module.exports = indexRouter;
