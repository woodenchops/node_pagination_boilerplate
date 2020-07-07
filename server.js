const express = require('express');
const cors = require('cors');
const connectDB = require('./config/dbconnection');
const Products = require('./models/Products');

const app = express();

connectDB();

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const PORT = process.env.PORT || 5000;

const payload = [
    {user: 1},
    {user: 2},
    {user: 3},
    {user: 4},
    {user: 5},
    {user: 6},
    {user: 7},
    {user: 8},
    {user: 9},
    {user: 10}
];

// middleware 

// const paginatedData = (model) => {
//     return (req, res, next) => {

//         const page = parseInt(req.query.page);
//         const limit = parseInt(req.query.limit);
    
//         const startIndex = (page - 1) * limit;
//         const endIndex = page * limit;
    
//         const results = {};
    
//         if(startIndex > 0) {
    
//             results.previous = {
//                 page: page - 1,
//                 limit: limit
//             };
    
//         }
    
//         if(endIndex < model.length) {
               
//             results.next = {
//                 page: page + 1,
//                 limit: limit
//             };
    
//         }
//         // if query params arent there, just return full array
//         results.data = (limit && page) ? model.slice(startIndex, endIndex) : model;
    
//         res.status(200).json({
//             payload: results
//         });

//         next();

//     };
// };


// import routes

const productsRoute = require('./routes/products');

// app.use('/products', paginatedData(payload), productsRoute);

app.use('/products', productsRoute);

app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`);
})