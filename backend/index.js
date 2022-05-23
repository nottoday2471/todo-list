import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'
import router from './routes/todo-routes.js'


const app = express()

app.use(express.json())
app.use(bodyParser.json())
app.use(cors())
app.use(router)

app.listen(5000, () => console.log('Server started on 5000'))
