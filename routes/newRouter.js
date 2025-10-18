const { Router } = require('express')
const newRouter = Router();



newRouter.get('/form', (req, res) => {
    res.render('form');
})

newRouter.post('/', (req, res) => {
    messages.push({ text: messageText, user: messageUser, added: new Date() });
})