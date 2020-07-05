const express = require('express');
const e = require('express');

const app = express();

const PORT = 5000;

const data = [
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

app.get('/users', (req, res) => {

    const page = parseInt(req.query.page);
    const limit = parseInt(req.query.limit);

    const startIndex = (page - 1) * limit;
    const endIndex = page * limit;

    // if "limit" is undefined, then result will equal all the data
    const result = (limit) ? data.slice(startIndex, endIndex) : data;

    res.status(200).json({
        payload: result
    });
});

app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`);
})