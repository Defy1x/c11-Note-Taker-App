// Dependencies
const express = require('express');
const fs = require('fs');
const path = require('path');
const { v4: uuidv4 } = require("uuid");
const data = require("./db/db.json");

// Sets up the Express App
const app = express();
const PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//get the css
app.use(express.static(__dirname + '/public'));

// HTML Routes
app.get('/', (req, res) => res.sendFile(path.join(__dirname, './public/index.html')));

app.get('/notes', (req, res) => res.sendFile(path.join(__dirname, './public/notes.html')));

//API Routes, Displays all notes
app.get('/api/notes', (req, res) => res.json(data));

// Create New Characters - takes in JSON input
app.post('/api/notes', (req, res) => {
  // req.body hosts is equal to the JSON post sent from the user
  // This works because of our body parsing middleware
  const newnote = req.body;

  console.log(newnote);

  // We then add the json the user sent to the character array
  data.push(newcharacter);

  // We then display the JSON to the users
  res.json(data);
});

// Starts the server to begin listening
app.listen(PORT, () => console.log(`App listening on PORT ${PORT}`));
