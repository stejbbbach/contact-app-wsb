import mongoose from 'mongoose';
import env from './env';

const connectToMongoDB = async () => {
    console.log('Connecting to MongoDB...');
    try {
        const conn = await mongoose.connect(env.MONGO_URI);
        console.log(`Connected to MongoDB: ${conn.connection.host}`);
    } catch (error) {
        console.log('Error while connecting to MongoDB: ' + error);
        process.exit(1);
    }
};

export default connectToMongoDB;
