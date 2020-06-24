const express = require('express');
const bodyParser = require('body-parser');
const Review = require('../models/review');
const cors = require('./cors');

const reviewRouter = express.Router();

reviewRouter.use(bodyParser.json());

reviewRouter.route('/')
.options(cors.corsWithOptions, (req,res) => res.sendStatus(200))
.get(cors.cors,(req,res,next) => {
    Review.find()
    .then(reviews => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'applicaiton/json');
        res.json(reviews);
    })
    .catch(err => next(err));
})
.post(cors.corsWithOptions, (req,res, next) => {
    Review.create(req.body)
    .then(reviews => {
        console.log('Review Created', reviews);
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json')
        res.json(reviews);
    })
    .catch(err => next(err));
})
.put(cors.corsWithOptions, (req,res,next) => {
    res.statusCode = 403;
    res.end('PUT not supported on /review');
})
.delete(cors.corsWithOptions, (req,res,next) => {
    Review.deleteMany()
    .then(response => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(response);
    })
  .catch(err => next(err));
})

// specific reviews posted

reviewRouter.route('/:reviewId')
.options(cors.corsWithOptions, (req,res) => res.sendStatus(200))
.get(cors.cors, (req,res,next) => {
    Review.findById(req.params.reviewId)
    .then(review => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(review);
    })
    .catch(err => next(err));
})
.post(cors.corsWithOptions, (req, res) => {
    res.statusCode = 403;
    res.end(`POST operation not supported on /review/${req.params.reviewId}`);
})
.put(cors.corsWithOptions, (req, res, next) => {
    Review.findByIdAndUpdate(req.params.reviewId, {
        $set: req.body
    }, { new: true })
    .then(review => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(review);
    })
    .catch(err => next(err));
})
.delete(cors.corsWithOptions, (req, res, next) => {
    Review.findByIdAndDelete(req.params.reviewId)
    .then(response => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(response);
    })
    .catch(err => next(err));
});

module.exports = reviewRouter;