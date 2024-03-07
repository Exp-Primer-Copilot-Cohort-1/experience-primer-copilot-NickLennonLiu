// Create web server
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');
const fs = require('fs');
const { v4: uuidv4 } = require('uuid');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static('public'));

app.get('/api/comments', (req, res) => {
  const data = fs.readFileSync('comments.json');
  const comments = JSON.parse(data);
  res.json(comments);
});

app.post('/api/comments', (req, res) => {
  const data = fs.readFileSync('comments.json');
  const comments = JSON.parse(data);
  const newComment = {
    id: uuidv4(),
    text: req.body.text
  }});