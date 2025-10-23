const { Router } = require('express')
const newRouter = Router();
const messageController = require('../controllers/messageController')


newRouter.get('/form', messageController.getMessageForm);


newRouter.post('/', messageController.postMessageForm)

module.exports = newRouter;