const express = ('express');
const bodyParser = ('body-parser');
const Review = require('../models/review');

const reviewRouter = express.Router();

reviewRouter.use(bodyParser.json());

reviewRouter.route('/review')
.get((req,res,next) => {

})
.post((req,res) => {
    res.statusCode = 200;
    res.end('reviews sent to website');
})
.put((req,res,next) => {
    res.statusCode = 403;
    res.end('PUT not supported on /review');
})
.delete((req,res,next) => {

})

module.exports = reviewRouter;