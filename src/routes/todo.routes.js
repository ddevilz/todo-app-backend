const express = require("express");
const {createTodo, showAllTodo, deleteAll, deleteOne} = require("../controllers/todo.controller.js")

const router = express.Router();

router.post("/createTodo", createTodo);
router.get("/showAllTodo", showAllTodo);
router.delete("/:id", deleteOne);
router.delete("/deleteAll", deleteAll);

module.exports = router;
