const express = require('express');
const bodyParser = require('body-parser');

const app = express();

// parse request bodies
app.use(bodyParser.json()); // parses JSON bodies of requests
app.use(bodyParser.urlencoded({extended: false}));  // for url encoded request bodies

// set response headers
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PATCH, DELETE, OPTIONS"
  );
  next();
});

// POST requests
app.post("/api/posts", (req, res, next) => {
  const post = req.body;
  console.log(post);
  res.status(201).json({
    message: 'Post added successfully.'
  });
});

// GET requests
app.get('/api/posts', (req, res, next) => {
  const posts = [
    {
      id: 'fasdajdhfjs',
      title: 'First server side post',
      content: 'This is coming from the server.'
    },
    {
      id: 'asdasdafdlgkj',
      title: 'Second server side post',
      content: 'This is also coming from the server.'
    },
  ]
  res.status(200).json({
    message: 'Posts fetched succesfully',
    posts: posts
  });
});

module.exports = app;
