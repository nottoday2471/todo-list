import EntityFactory from '../factory/entity-factory.js'

export default class TodoController {
    constructor() {
        this.addTodo = this.addTodo.bind(this)
        this.getTodos = this.getTodos.bind(this)
        this.updateTodo = this.updateTodo.bind(this)
        this.deleteTodo = this.deleteTodo.bind(this)
        this.deleteAllTodos = this.deleteAllTodos.bind(this)
    }

    async addTodo(req, res) {
        try {
            const text = req.body
            const todo = await EntityFactory.getEntity('todo')
            const addedTodo = await todo.insertTodo(text.text)
            res.status(201).json(addedTodo)
        } catch(err) {
            console.log(err)
        }
    }

    async getTodos(req, res) {
        try {
            const status = req.params.status
            const todo = await EntityFactory.getEntity('todo')
            const todos = await todo.getTodos(status)
            res.json(todos)
        } catch(err) {
            console.log(err)
        }
    }

    async updateTodo(req, res) {
        try {
            const newTodo = req.body
            const todo = await EntityFactory.getEntity('todo')
            const changedTodo = await todo.updateTodo(newTodo)
            res.json(changedTodo)
        } catch(err) {
            console.log(err)
        }
    }

    async deleteTodo(req, res) {
        try {
            const id = req.params.id
            const todo = await EntityFactory.getEntity('todo')
            await todo.deleteTodo(id)
            res.status(201).json({ message: 'OK' })
        } catch(err) {
            console.log(err)
        }
    }

    async deleteAllTodos(req, res) {
        try {
            const todo = await EntityFactory.getEntity('todo')
            await todo.deleteAllTodos()
            res.status(201).json({ message: 'OK' })
        } catch(err) {
            console.log(err)
        }
    }
}