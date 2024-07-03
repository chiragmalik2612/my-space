const express = require('express');
const { createTask, getTask, getTasks, deleteTask, updateTask } = require('../controllers/myTasksController');
const requireAuth = require('../middlewares/requireAuth');

const router = express.Router();


//Middleware to check if user is authenticated
router.use(requireAuth);


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