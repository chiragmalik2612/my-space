const mongoose = require('mongoose');

const Schema = mongoose.Schema

const myTasksSchema = new Schema({
    title: {
        type: String,
        required: true
    },
}, { timestamps: true})

module.exports = mongoose.model('MyTasks', myTasksSchema)