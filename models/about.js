const mongoose = require('mongoose');
const aboutSchema = mongoose.Schema({
    title:String,
    text:String
});
module.exports = mongoose.model('About',aboutSchema);