import MongoConnection from '../config/database.js'
import dotenv from 'dotenv'
import { ObjectID } from 'bson'

dotenv.config()

export default class Todo {
    #todos = []
    #collection

    constructor(collection) {
        this.#collection = collection
    }

    async insertTodo(text) {
        const todo = {
            text,
            status: 'new',
            created: Date.now()
        }
        try {
            const result = await this.#collection.insertOne(todo)
            return {
                _id: result.insertedId,
                ...todo
            }
        } catch(err) {
            console.log(err)
        }
    }

    async getTodos(paramForSort) {
        try {
            switch(paramForSort) {
                case 'all':
                    this.#todos = await this.#collection.find().toArray()
                    return this.#todos
                case 'finished':
                    this.#todos = await this.#collection.find().toArray()
                    return this.#todos
                default:
                    break
            }
        } catch(err) {
            console.log(err)
        }

    }

    async updateTodo(newTodo) {
        try {
            await this.#collection.updateOne({ _id: new ObjectID(newTodo.id) }, { $set: newTodo })
            return newTodo
        } catch(err) {
            console.log(err)
        }
    }

    async deleteTodo(id) {
        try {
            await this.#collection.deleteOne({ _id: new ObjectID(id) })
        } catch(err) {
            console.log(err)
        }
    }

    async deleteAllTodos() {
        try {
            await this.#collection.remove()
        } catch(err) {
            console.log(err)
        }
    }
}