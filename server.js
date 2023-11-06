const express = require("express");
const cors = require("cors");

const app = express();

var corsOptions = {
  origin: ["http://192.168.0.127:8080","http://192.168.11.41:8080","http://jktvmfiles04:8080"]
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to Tugu - MFIles Express API" });
});

require("./app/routes/overdue.routes.js")(app);

// set port, listen for requests
const PORT = process.env.PORT || 8083;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});