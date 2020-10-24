const express = require('express');

const app = express();

//app.use(require('./usuario'));
//app.use(require('./login'));
//app.use(require('./producto'));
//app.use(require('./todo'));

app.use(require('./comments.router'));

module.exports = app;