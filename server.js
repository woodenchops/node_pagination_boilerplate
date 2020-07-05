const express = require('express');

const app = express();

const PORT = 5000;

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

const paginatedData = (model) => {
    return (req, res, next) => {

        const page = parseInt(req.query.page);
        const limit = parseInt(req.query.limit);
    
        const startIndex = (page - 1) * limit;
        const endIndex = page * limit;
    
        const results = {};
    
        if(startIndex > 0) {
    
            results.previous = {
                page: page - 1,
                limit: limit
            };
    
        }
    
        if(endIndex < model.length) {
               
            results.next = {
                page: page + 1,
                limit: limit
            };
    
        }
        // if query params arent there, just return full array
        results.data = (limit && page) ? model.slice(startIndex, endIndex) : model;
    
        res.status(200).json({
            payload: results
        });

        next();

    };
};

app.get('/users', paginatedData(payload), (req, res) => {});

app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`);
})