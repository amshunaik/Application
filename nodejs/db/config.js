// const mongoose =require('mongoose');

// mongoose.connect("mongodb://127.0.0.1:27017/e-com")
const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        await mongoose.connect("mongodb+srv://amshu8674:Asdfghfdsadfg@cluster0.zmrg0pt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0", {
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
