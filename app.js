const express = require('express');
const app = express();
const path = require('node:path')

const indexRouter = require('./routes/indexRouter')
const newRouter = require('./routes/newRouter')

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use('/', indexRouter);
app.use(express.urlencoded({ extended: true }));
app.use('/new', newRouter);




const PORT = 3000;
app.listen(PORT, (error) => {
  if (error) {
    throw error;
  }
  console.log(`Mini Messageboard - listening on port ${PORT}!`);
});
