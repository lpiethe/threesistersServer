const express = ('express');
const bodyParser = ('body-parser');

const reviewRouter = express.Router();

reviewRouter.use(bodyParser.json());

reviewRouter.route('/review')
.post((req,res) => {
    res.statusCode = 200;
    res.end('reviews sent to website');
})