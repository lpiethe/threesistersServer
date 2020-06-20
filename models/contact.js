const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const contactSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    text: {
        type: String,
        required: true
    }
}, {
    timestamps: true
});

const Contact = mongoose.model('Review', contactSchema);
module.exports = Contact;