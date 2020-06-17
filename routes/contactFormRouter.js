const express = require('express');
const bodyParser = require('body-parser');


const contactFormRouter = express.Router();

contactFormRouter.use(bodyParser.json());

contactFormRouter.route('/')
.post((req,res) => {
    res.statusCode = 200;
    res.end('we have sent the contact info to you!');
})