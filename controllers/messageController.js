const db = require('../data/queries')

const links = [
    {href: '/', text: 'Home'},
    {href: '/new/form', text: "New Message"}
]

async function getUserMessages(req, res){
    const messages = await db.getAllMessages();
    res.render('index', { messages: messages, links: links })
}

function getMessageForm(req, res){
    res.render('form', { links: links });
}

async function postMessageForm(req, res){
    const messageText = req.body.messageText;
    const username = req.body.username;
    const date = (new Date()).toDateString();

    await db.insertMessage(messageText, username, date);
    res.redirect('/');
}

module.exports = {
    getUserMessages,
    getMessageForm,
    postMessageForm
}
