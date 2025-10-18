const { Router } = require('express');
const indexRouter = Router();
const { messages } = require('../data/messageData') 

const links = [
    {href: '/', text: 'Home'},
    {href: '/new/form', text: "New Message"}
]

indexRouter.get('/', (req, res) => {
    res.render('index', { messages: messages, 'links': links })
})

module.exports = indexRouter;
