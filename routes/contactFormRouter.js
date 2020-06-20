const express = require('express');
const bodyParser = require('body-parser');
const Contact = require('../models/contact');


const contactFormRouter = express.Router();

contactFormRouter.use(bodyParser.json());

contactFormRouter.route('/')
.get((req,res,next) => {

})
.post((req,res) => {
    res.statusCode = 200;
    res.end('we have sent the contact info to you!');
})
.put((req,res,next) => {

})
.delete((req,res,next) => {
    
})


module.exports = contactFormRouter;