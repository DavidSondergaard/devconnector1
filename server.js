const express = require("express"); //main framework
const mongoose = require("mongoose"); //used to connect and interact with MongoDB
const bodyParser = require("body-parser"); //take in data with requests and do what we want with them.

const users = require("./routes/api/users");
const profile = require("./routes/api/profile");
const posts = require("./routes/api/posts");

const app = express();

app.get("/", (req, res) => res.send("hello!"));

// DB Config
const db = require("./config/keys.js").mongoURI;

//connect to MongoDB
mongoose
  .connect(db) //this is telling mongoose to connect to db
  .then(() => console.log("MongoDB Connected")) //.then is a promise with success if it works
  .catch(err => console.log(err)); // if it fails, this is how js promises work.

//use Routes
app.use("/api/users", users);
app.use("/api/profile", profile);
app.use("/api/posts", posts);

app.get("/", (req, res) => res.send("Hello World!!!"));

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on port ${port}`));
