const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const reviewSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    date: {
        type: Date,
        min: '2019-01-01',
        max: '2040-01-01'
    },
    rating: {
        type: Number,
        min: 1,
        max: 5,
        required: true
    },
    text: {
        type: String,
        required: true
    }
}, {
    timestamps: true
});

const Review = mongoose.model('Review', reviewSchema);
module.exports = Review;