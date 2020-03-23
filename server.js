const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const app = express();

//BodyParser Middleware
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true
  })
);

// Enabling CORS
var cors = require("cors");
app.use(cors());

//Connect to Mongo
mongoose
  .connect("mongodb://127.0.0.1:27017/agro", {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));

app.get("/", (req, res) => res.send("This is for API calls"));

//Blogs
const postsRoute = require("./api/routes/postsRoute");
app.use("/api/posts", postsRoute);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log("Server started on port " + port));
