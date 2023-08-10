const mongoose = require("mongoose")

const todoSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "Title is required"],
        trim: true,
        maxlength: [20, "Name must be less than 20 characters long"],
    },
    description: {
        type: String,
        required: [true, "Title is required"],
        trim: true
    }
},{timestamps:true})

module.exports = mongoose.Collection("Todo", todoSchema)