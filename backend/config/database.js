import { MongoClient } from 'mongodb';
import dotenv from 'dotenv';

dotenv.config();

export default class MongoConnection {
    static #client = new MongoClient(process.env.DATABASE_URL);

    constructor() {}

    static async getConnection() {
        try {
            await MongoConnection.#client.connect();
            console.log('Connected to Mongo');
            return MongoConnection.#client;
        } catch (err) {
            console.log(err);
        }
    }
}
