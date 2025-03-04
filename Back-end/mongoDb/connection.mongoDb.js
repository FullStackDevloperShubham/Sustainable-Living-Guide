import mongoose from 'mongoose';


const mongodb_connection = async()=>{
    try {
        const connection =  await mongoose.connect(process.env.MONGODB_CONNECTION_URL);
        console.log('MongoDB connection successful');
    } catch (error) {
        console.log('MongoDB connections failed',error.message);
    }
}

export default mongodb_connection;