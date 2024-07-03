const Task = require('../models/myTasksModel');
const mongoose = require('mongoose')

// get all tasks
const getTasks = async (req, res) => {
  const user_id = req.user._id;

  try {
    const tasks = await Task.find({user_id}).sort({ createdAt: -1 });
    console.log('Fetched tasks:', tasks); 
    res.status(200).json(tasks);
  } catch (error) {
    console.error('Error fetching tasks:', error);
    res.status(500).json({ error: 'Failed to fetch tasks' });
  }
};

// get a single task
const getTask = async (req, res) => {
  const { id } = req.params

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({error: 'No such task'})
  }

  const task = await Task.findById(id)

  if (!task) {
    return res.status(404).json({error: 'No such task'})
  }

  res.status(200).json(task)
}

// create a new task
const createTask = async (req, res) => {
  const {title} = req.body

  if (!title) {
    return res.status(400).json({ error: 'Please Add a task' })
  }

  // add to the database
  try {
    const user_id = req.user._id
    const task = await Task.create({ title, user_id})
    res.status(200).json(task)
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
}

// delete a task
const deleteTask = async (req, res) => {
  const { id } = req.params

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({error: 'No such task'})
  }

  await Task.findByIdAndDelete(id)

  res.status(200).json({message: 'Task deleted successfully'})
}

// update a task    
const updateTask = async (req, res) => {
  const { id } = req.params
  const { title } = req.body

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({error: 'No such task'})
  }

  if (!title) {
    return res.status(400).json({ error: 'Please Add a task' })
  }

  const task = await Task.findByIdAndUpdate(id, { title }, { new: true })

  res.status(200).json(task)
}

module.exports = { getTasks, getTask, createTask, deleteTask, updateTask };
