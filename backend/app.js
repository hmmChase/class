const express = require('express');
const logger = require('morgan');
const cors = require('cors');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const compression = require('compression');
const helmet = require('helmet');

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const discordRouter = require('./routes/discord');
const questionsRouter = require('./routes/questions');
const commentsRouter = require('./routes/comments');

const errorHandlers = require('./handlers/errorHandlers');
const { BASE_URL } = require('./config');

const app = express();

app.set('view engine', 'ejs');

// const whitelist = [];
// if (app.get('env') === 'development') whitelist.push('http://localhost:4000');
// else whitelist.push('https://challenge-board.vercel.app/');

// const corsOptions = {
//   origin: (origin, callback) => {
//     if (whitelist.indexOf(origin) !== -1) callback(null, true);
//     else callback(Error('Not allowed by CORS'));
//   },

//   credentials: true
// };

const corsOptions = { origin: BASE_URL, credentials: true };

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(compression());
app.use(helmet());

app.use('/', indexRouter);
app.use('/api', indexRouter);

const v1 = express.Router();
app.use('/api/v1', v1);

v1.use('/', indexRouter);
v1.use('/users', usersRouter);
v1.use('/discord', discordRouter);
v1.use('/questions', questionsRouter);
v1.use('/comments', commentsRouter);

app.use(errorHandlers.notFound);

if (app.get('env') === 'development') app.use(errorHandlers.developmentErrors);
else app.use(errorHandlers.productionErrors);

module.exports = app;
