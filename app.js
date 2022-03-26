const bodyParser = require('body-parser');
const cors = require('cors');

const mongoConnect = require('./util/database').mongoConnect;

const express = require('express');
const app = express();

const papersRoutes = require('./routes/papers');

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/papers', papersRoutes);

mongoConnect()
  .then(db => {
    app.listen(4242);
  })