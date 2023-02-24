const express = require("express");
const cors = require("cors");

const ApiError = require("./app/api-error");
const app = express();

const contactsRouter = require("./app/routes/contact.route");
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json({ message: "welcome to contact book application" });
});

app.use("/api/contacts", contactsRouter);

module.exports = app;