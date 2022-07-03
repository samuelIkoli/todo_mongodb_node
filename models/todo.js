const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TodoSchema = new Schema({
    id: Number,
    title: String,
    description: String,
    time: Date
})

module.exports = mongoose.model('Todo', TodoSchema);