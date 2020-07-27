const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

// MiddleWare
app.use(bodyParser.json());
app.use(cors());

const historyRoutes = require("./routes/api/recent");

app.use("/api/recent", historyRoutes);

mongoose
  .connect(
    `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster-pickar-b7z3u.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`
  )
  .then(() => {
    app.listen(process.env.PORT || 8081);
  })
  .catch(err => {
    console.log(err);
  });
