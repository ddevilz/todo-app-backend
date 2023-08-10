require('dotenv').config()

const config = {
    MONGODB_URL: process.env.MONGODB_URL || "mongodb://localhost:27017/todo",
    PORT: process.env.PORT || 5000
}

module.exports = config;