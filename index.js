const express = require("express");
const logger = require("morgan");
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv").config();

const app = express();

const xendit = require("./routes/xendit");

app.use(cors());
app.use(logger("dev"));
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.use("/xendit", xendit);

app.get("/", (req, res) =>
  res.status(200).send({
    message: "Server Running",
  })
);

const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(`server running on port ${port}`);
});

app.use(function (req, res, next) {
  res.status(404).send({ message: "API Not Found" });
});

module.exports = app;
