const { Router } = require('express')
const newRouter = Router();
const { messages } = require('../data/messageData') 

newRouter.get('/form', (req, res) => {
    res.render('form');
})

newRouter.post('/', (req, res) => {
    const messageText = req.body.messageText;
    const messageUser = req.body.authorName;

    messages.push({ text: messageText, user: messageUser, added: new Date() });
})

module.exports = newRouter;