import mongoose from 'mongoose';

const connectToMongoDB = async () => {
    console.log('Connecting to MongoDB...');
    try {
        const conn = await mongoose.connect(
            'mongodb://localhost:27017/contact_app',
        );
        console.log(`Connected to MongoDB${conn.connection.host}`);
    } catch (error) {
        console.log('Error while connecting to MongoDB: ' + error);
        throw error;
    }
};

export default connectToMongoDB;
