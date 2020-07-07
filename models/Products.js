const mongoose = require('mongoose');

const ProductSchema = mongoose.Schema({
    id: {
        type: String
    },
    name: {
        type: String,
        required: true,
        trim: true
    },
    price: {
        type: Number,
        required: true,
    },
    stock: {
        type: Number
    }
});

module.exports = mongoose.model('Items', ProductSchema);