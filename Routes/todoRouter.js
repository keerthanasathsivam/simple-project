// app/routes/todoRoutes.js
const express = require('express');
const router = express.Router();
const todoController = require('../controller/todocontroller.js');

router.get('/dos', todoController.getAllTodos);
const { User } = require('../models/todoModel.js');

exports.getAllTodos = async (req, res) => {
  const { id } = req.params;

  try {
    if (id) {
      // If 'id' is provided, fetch a specific todo
      // Convert 'id' to a number if needed
      const todo = await User.findByPk(Number(id));
      if (!todo) {
        return res.status(404).json({ error: 'Todo not found' });
      }
      res.json(todo);
    } else {
      // If 'id' is not provided, fetch all todos
      const todos = await User.findAll();
      res.json(todos);
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
router.get('/dos/:id', todoController.getAllTodos);
module.exports = router;
