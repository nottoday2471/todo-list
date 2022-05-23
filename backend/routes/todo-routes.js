import express from 'express'
import TodoController from '../controllers/todo-controller.js'

const todo = new TodoController()

const router = express.Router()

router.post('/todos', todo.addTodo)
router.get('/todos', todo.getTodos)
router.patch('/todos', todo.updateTodo)
router.delete('/todos/:id', todo.deleteTodo)
router.delete('/todos', todo.deleteAllTodos)

export default router