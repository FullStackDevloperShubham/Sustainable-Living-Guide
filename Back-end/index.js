// server creating
import express from 'express';
import cors from 'cors';

const app= express();

const PORT = process.env.PORT || 5000

// import other files 
import mongodb_connection from './mongoDb/connection.mongoDb.js';

// dotenv configuration
import dotenv from 'dotenv';
dotenv.config();

// Middleware
app.use(express.json()); // Parse JSON requests
app.use(cors({
    //  allow all origins
    origin: "*",
})); // Enable CORS


// all ROUTES
app.get('/',(req, res)=>{
    res.send('hello server')
})


// connecting to the database
const connectWhenMongoDbIsReady = async()=>{
    try {
        await mongodb_connection();
        app.listen(PORT,()=>{
            console.log(`Server is running on port ${PORT}`);
        });
    } catch (error) {
        console.log('Server failed to start',error.message);
    }
}

// calling the function 
connectWhenMongoDbIsReady();