const Todo = require("../model/todo.schema.js");

exports.createTodo = async (req, res) => {
    try {
        const {title, description} = req.body;

        if (!title || !description) {
            throw new Error("Fields are incomplete")
        }
        
        const todo = await Todo.create({
            title,
            description
        })

        res.status(200).json({
            success: true,
            todo
        })
        
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message,
        });
    }
}