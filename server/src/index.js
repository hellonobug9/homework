require('./models/User');
const authRoutes = require('./routes/authRoutes');
const express = require('express')
const chalk = require('chalk');
const cors = require('cors')
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const helmet = require("helmet");
const keys = require('./config/keys');
const app = express()

mongoose.connect(keys.mongoURI);
mongoose.connection.on('connected', () => {
    console.log(chalk.blue('Connected to mongo instance'));
});
mongoose.connection.on('error', err => {
    console.error('Error connecting to mongo', err);
});

app.use(cors())
app.use(morgan('common'));
app.use(helmet());
app.use(bodyParser.json());
app.use(authRoutes);

app.get('/', function (req, res) {
    res.send('Hello World')
})

const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});