const express = require('express');
// const path = require('path');

const app = express();

const PORT = process.env.PORT ||  5050;

app.use(express.json());
app.use(express.urlencoded({ extended: true}))
// app.use(express.static(path.join(__dirname, 'public')))s


//does not work as of now because these routes currently do not export, so the require returns an error. Uncomment when routes are done.
require('./routes/home.js')(app);
// require('./routes/api.js')(app);

app.listen(PORT, () => {
  console.log(`Now listening on post ${PORT}`);
});