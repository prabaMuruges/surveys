const keys = require('./config/dev');
const express = require('express');
const app = express();
const mongoose = require('mongoose');

require('./models/user');
require('./services/passport');

mongoose.connect(keys.mongoURI, {
  auth: {
    user: 'admin',
    password: '4XG!iM%D5%gT'
  },
  useNewUrlParser: true
}, function(err, client) {
  if (err) console.log(err);
  console.log('Db connected!!!');
});

require('./routes/authentication')(app);
const PORT = process.env.PORT || 5000
app.listen(PORT)
