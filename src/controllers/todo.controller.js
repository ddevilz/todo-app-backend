const Todo = require("../model/todo.schema.js");

exports.createTodo = async (req, res) => {
    try {
        const { title, description } = req.body;

        if (!title || !description) {
            throw new Error("Fields are incomplete")
        }
        
        const todos = await Todo.create({
            title,
            description
        })

        res.status(200).json({
            success: true,
            todos
        })
        
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message,
        });
    }
}

exports.showAllTodo = async (req,res) => {
    try {
        const todos = await Todo.find({})

        res.status(200).json({
            success: true,
            todos
        })
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message,
        });
    }
}

exports.deleteOne = async(req,res) => {
    try {
        const {id: todoId} = req.params

        if (!todoId) {
            throw new Error("Todo not found")
        }

        const todos = await Todo.findByIdAndDelete(todoId)

        res.status(200).json({
            success: true,
            todos
        })
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message,
        });
    }
}

exports.deleteAll = async (req,res) => {
    try {
        const todos = await Todo.deleteMany({})

        res.status(200).json({
            success: true,
            todos
        })
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message,
        });
    }
}