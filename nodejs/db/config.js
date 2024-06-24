// const mongoose =require('mongoose');

// mongoose.connect("mongodb://127.0.0.1:27017/e-com")
const mongoose = require('mongoose');
require('dotenv').config();
const Mongo_module=process.env.Mongo_module
const connectDB = async () => {
    try {
        await mongoose.connect(`${Mongo_module}`, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log('Connected to MongoDB');
    } catch (err) {
        console.error('Could not connect to MongoDB:', err);
        process.exit(1);
    }
};

module.exports = connectDB;
