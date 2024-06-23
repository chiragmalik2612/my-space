const express = require('express');
const { createTask, getTask, getTasks, deleteTask, updateTask } = require('../controllers/myTasksController');

const router = express.Router();


//GET all tasks
router.get('/', getTasks)   

//GET a single task
router.get('/:id', getTask)

//POST a new task
router.post('/',  createTask);

//DELETE a task
router.delete('/:id',deleteTask)

//UPDATE a task
router.patch('/:id', updateTask)


module.exports = router;