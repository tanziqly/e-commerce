const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
dotenv.config();

const sequelize = require("./db");
const models = require("./models/models");

const PORT = process.env.PORT || 7000;
const app = express();
app.use(cors());
app.use(express.json());

const start = async () => {
  try {
    sequelize.authenticate();
    sequelize.sync();

    app.listen(PORT, () => console.log(`Server working. PORT: ${PORT}`));
  } catch (e) {
    console.log(e);
  }
};

start();
