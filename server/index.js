import express from 'express'
import mongoose from 'mongoose';
import dotenv from 'dotenv'
import cors from 'cors'

import authRoute from './routes/auth.js'
import testRoute from './routes/tests.js'


const app = express()
dotenv.config()

// Constants
const PORT = process.env.PORT || 3001
const DB_USER = process.env.DB_USER
const DB_PASSWORD = process.env.DB_PASSWORD
const DB_NAME = process.env.DB_NAME

// Middleware
app.use(cors())
app.use(express.json())

// Routes
// http://localhost:3002
app.use('/api/auth', authRoute)
app.use('/api/test', testRoute)

async function start() {
    try{
        await mongoose.connect(
            `mongodb+srv://${DB_USER}:${DB_PASSWORD}@cluster0.ezymzys.mongodb.net/${DB_NAME}?retryWrites=true&w=majority`,
            )
        app.listen(3002, () => {
            console.log('Server started on port 3002')
        })
    } catch (error) {
        console.log(error);
    }
}

start()