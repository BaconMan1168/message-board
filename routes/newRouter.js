const { Router } = require('express')
const newRouter = Router();
const { messages } = require('../data/messageData') 

const links = [
    {href: '/', text: 'Home'},
    {href: '/new/form', text: "New Message"}
]

newRouter.get('/form', (req, res) => {
    res.render('form', { links: links });
})

newRouter.post('/', (req, res) => {
    const messageText = req.body.messageText;
    const messageUser = req.body.authorName;

    messages.push({ text: messageText, user: messageUser, added: new Date() });
    res.redirect('/');
})

module.exports = newRouter;