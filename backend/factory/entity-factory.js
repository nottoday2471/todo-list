import Todo from '../models/todo-model.js'
import MongoConnection from "../config/database.js";

export default class EntityFactory {
    static async getEntity(instance) {
        const client = await MongoConnection.getConnection()
        const db = client.db(process.env.DATABASE_NAME)
        switch (instance) {
            case 'todo':
                const collection = db.collection('todos')
                return new Todo(collection)
            default:
                break;
        }
    }
}