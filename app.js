const bodyParser = require('body-parser');
const cors = require('cors');

const mongoConnect = require('./util/database').mongoConnect;

const express = require('express');
const app = express();
const port = process.env.PORT || 4242;

const papersRoutes = require('./routes/papers');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

app.use('/papers', papersRoutes);

mongoConnect()
  .then(db => {
    app.listen(port);
  })