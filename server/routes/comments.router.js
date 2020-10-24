const express = require('express');

const cors = require("cors");

const CommentsController = require('../controllers/comments.controller');

let app = express();

// ===========================
//  Rutas para Comentarios
// ===========================

app.get(process.env.API_URL + '/comments', cors(), CommentsController.getList);

app.get(process.env.API_URL + '/comments/:id', cors(), CommentsController.getOne);

app.post(process.env.API_URL + '/comments', cors(), CommentsController.create);

app.put(process.env.API_URL + '/comments/:id', cors(), CommentsController.update); 

module.exports = app;

