const express = require('express');
const db = require('./database');
const middlewares = require('./middleware/index');
const adminRouter = require('./routes/admin');
const userRouter = require('./routes/users');
// const _delete = require('./helpers/deleteFolderFiles');

const app = express();

require('dotenv').config({ silent: true });

db.connectToAtlas();

app.use(...middlewares);

app.use(adminRouter);
app.use(userRouter);



module.exports = app;