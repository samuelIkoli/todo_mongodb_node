const express = require('express');

const router = express.Router();
const {showtodo, addtodo, updatetodo, deletetodo} = require('../controllers/todoController');

router
    .get('/', showtodo)
    .post('/', addtodo)
    .put('/:id', updatetodo)
    .delete('/:id', deletetodo)

module.exports = router;

