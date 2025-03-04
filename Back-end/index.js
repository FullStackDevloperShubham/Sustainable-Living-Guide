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

// import routes using router
import router from './routes/post.route.js';

// Middleware
app.use(express.json()); // Parse JSON requests
app.use(cors()); // Enable CORS

// use router
app.use('/',router);

// connecting to the database
const connectWhenMongoDbIsReady = async()=>{
    try {
        await mongodb_connection();
        app.listen(PORT,()=>{
            console.log(`http://localhost:${PORT}`);
        });
    } catch (error) {
        console.log('Server failed to start',error.message);
    }
}

// calling the function 
connectWhenMongoDbIsReady();