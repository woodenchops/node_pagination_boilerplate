const express = require('express');
const cors = require('cors');
const connectDB = require('./config/dbconnection');

const app = express();

connectDB();

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const PORT = process.env.PORT || 5000;


// import routes

const productsRoute = require('./routes/products');

app.use('/products', productsRoute);

app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`);
});