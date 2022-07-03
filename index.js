const express = require("express");
const { json } = require("express");
const routes = require("./routes/todoRoute");
const mongoose = require('mongoose');
const {MongoClient} = require('mongodb');


require('dotenv').config();

const app = express();

app.use(json());

app.use("/", routes);

const port = process.env.PORT || 3000;

const dbUrl = process.env.DB_URL || 'mongodb://localhost:27017/zuriTodo';

const db = mongoose.connection;
db.on("error", console.error.bind(console, "correction error:"));
db.once("open", () => {
    console.log("Database connected");
});


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});