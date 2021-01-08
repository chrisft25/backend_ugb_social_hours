const mongoose = require('mongoose');
const contactSchema = mongoose.Schema({
    icon:String,
    name:String,
    content:String
});
module.exports = mongoose.model('Contact',contactSchema);