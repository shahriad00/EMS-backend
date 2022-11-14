const express = require('express');
const db = require('./database');
const middlewares = require('./middleware/index');
const adminRouter = require('./routes/admin');
const userRouter = require('./routes/users');
const employeeRouter = require('./routes/employee');

const app = express();

require('dotenv').config({ silent: true });

db.connectToAtlas();

app.use(...middlewares);

app.use(employeeRouter);
app.use(adminRouter);
app.use(userRouter);



module.exports = app;