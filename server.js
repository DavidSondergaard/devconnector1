const express = require("express"); // EDU: main framework
const mongoose = require("mongoose"); // EDU: used to connect and interact with MongoDB
const bodyParser = require("body-parser"); // EDU: take in data with requests and do what we want with them.

const users = require("./routes/api/users");
const profile = require("./routes/api/profile");
const posts = require("./routes/api/posts");

const app = express();

// EDU: Body parser middle-ware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json()); // now we should be able  to access req.body.whatever

app.get("/", (req, res) => res.send("hello!"));

// EDU: DB Config
const db = require("./config/keys.js").mongoURI;

// EDU: connect to MongoDB
mongoose
  .connect(db) //this is telling mongoose to connect to db
  .then(() => console.log("MongoDB Connected")) //.then is a promise with success if it works
  .catch(err => console.log(err)); // if it fails, this is how js promises work.

// EDU: use Routes
app.use("/api/users", users);
app.use("/api/profile", profile);
app.use("/api/posts", posts);

// ? QUERY: Why do I have this here?
app.get("/", (req, res) => res.send("Hello World!!!"));

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on port ${port}`));
