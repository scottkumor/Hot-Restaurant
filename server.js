// Dependencies
// ===========================================================
var express = require("express");
var path = require("path");

var app = express();
var PORT = process.env.PORT || 8080;

// set up the express app to handle data parsing
app.use(express.urlencoded({ extend: true }));
app.use(express.json());



// Routes
// ===========================================================
// general route
app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, './public/index.html'))
  });

// Displays all characters
app.get("/api/tables", function(req, res) {
  return res.json(rsvp);
});

// Displays all characters
app.get("/api/waitlist", function(req, res) {
  return res.json(waitList);
});

app.get("/tables", function(req, res) {
  res.sendFile(path.join(__dirname, "./public/tables.html"));
});

app.get("/reserve", function(req, res) {
  res.sendFile(path.join(__dirname, "./public/reserve.html"));
});

app.post("/api/clear", function(req, res) {
  rsvp.length = 0;
  waitList.length = 0;
  res.json(true);
});

// Create New tables - takes in JSON input
app.post("/api/tables", function(req, res) {
  // req.body hosts is equal to the JSON post sent from the user
  // This works because of our body parsing middleware
  var newRes = req.body;

  if (rsvp.length < 5){
    rsvp.push(newRes);

  res.json(newRes);
  }
  else {
    waitList.push(newRes);
  
    res.json(newRes);
    }

  });

 


// DATA
// =============================================================
const rsvp = []
const waitList = []


// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
  