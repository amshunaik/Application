const express = require('express');
const cors = require('cors');
const connectDB = require('./db/config'); // Import the connection module
const User = require('./db/User');
const Product = require('./db/Product');
const isNestedProjection = require('../projection/isNestedProjection');

const app = express();
app.use(cors());
app.use(express.json());

// Connect to MongoDB
connectDB();

app.post("/register", async (req, res) => {
    let user = new User(req.body);
    let result = await user.save();
    res.send(result);
});

app.post("/login", async (req, res) => {
    if (req.body.pw && req.body.email) {
        let user = await User.findOne(req.body).select("-pw");
        console.log("ijnh : ",user)
        if (user) {
            res.send(user);
        } else {
            res.send("no user found");
        }
    } else {
        res.send({ result: "no result" });
    }
});

app.post("/add", async (req, res) => {
    let prod = new Product(req.body);
    let result = await prod.save();
    res.send(result);
});

app.get("/product", async (req, res) => {
    let products = await Product.find();
    if (products.length > 0) {
        res.send(products);
    } else {
        res.send({ result: "no list found" });
    }
});

app.delete("/product/:id", async (req, res) => {
    const result = await Product.deleteOne({ _id: req.params.id });
    res.send(result);
});
const PORT=process.env.PORT||4000
app.listen(PORT, () => {
    console.log('Server started on port 4000');
});
