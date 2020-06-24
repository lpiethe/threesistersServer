const express = require('express');
const bodyParser = require('body-parser');
const Contact = require('../models/contact');
const cors = require('./cors');


const contactFormRouter = express.Router();

contactFormRouter.use(bodyParser.json());

contactFormRouter.route('/')
.options(cors.corsWithOptions, (req,res) => res.sendStatus(200))
.get(cors.cors, (req,res,next) => {
    Contact.find()
    .then(contact => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'applicaiton/json');
        res.json(contact);
    })
        .catch(err => next(err));
})
.post(cors.corsWithOptions, (req,res, next) => {
    Contact.create(req.body)
    .then(contact => {
        console.log('Review Created', contact);
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json')
        res.json(contact);
    })
    .catch(err => next(err));
})
.put(cors.corsWithOptions, (req,res,next) => {
    res.statusCode = 403;
    res.end('PUT not supported on /contact');
})
.delete(cors.corsWithOptions, (req,res,next) => {
    Contact.deleteMany()
    .then(response => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(response);
    })
  .catch(err => next(err));
})


module.exports = contactFormRouter;