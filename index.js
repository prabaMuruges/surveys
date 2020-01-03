const keys = require('./config/dev');
const express = require('express');
const app = express();

const cookieSession = require('cookie-session');
const passport = require('passport');
const mongoose = require('mongoose');

app.use(
	cookieSession({
		maxAge: 90 * 24 * 60 * 60 * 1000,
		keys: [keys.cookieKey]
	})
);

app.use(passport.initialize());
app.use(passport.session());

require('./models/user');
require('./services/passport');

mongoose.connect(keys.mongoURI, {
  auth: {
    user: keys.mongoUserName,
    password: keys.mongoPassword
  },
  useNewUrlParser: true
}, function(err, client) {
  if (err) console.log(err);
  console.log('Db connected!!!');
});

require('./routes/authentication')(app);
const PORT = process.env.PORT || 5000
app.listen(PORT)
