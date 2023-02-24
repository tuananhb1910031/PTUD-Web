exports.create = (req, res) => { 
     res.send({ message: "create handler" });

 };

 exports.findALL = (req, res) => { 
    res.send({ message: "findAll handler" });

 };

 exports.findOne = (req, res) => {
     res.send({ message: "findOne handler" });

 };

 exports.update = (req, res) => {
     res.send({ message: "update handler" });

 };

 exports.delete = (req, res) => {
     res.send({ message: "delete handler" });

 };

 exports.deleteALL = (req, res) => { 

    res.send({ message: "deleteAll handler" });

 };

 exports.findALLFavorite = (req, res) => {

    res.send({ message: "findAllFavorite handler" }); 
};    
const express = require("express");
const contacts = require("../controllers/contact.controller");

const router = express. Router();

 router.route("/")

    .get(contacts.findAll)

    .post(contacts.create)

    .delete(contacts.deleteAll);

router.route("/favorite")

    .get(contacts.findAllFavorite);

router.route("/:id")

    .get(contacts.findOne)

    .put(contacts.update)

    .delete(contacts.delete);

module.exports = router;

