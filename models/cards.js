const mongoose = require('mongoose');
const cardSchema = mongoose.Schema({
    title:String,
    description:String,
    descriptionForm:String,
    icon:String
});
module.exports = mongoose.model('Card',cardSchema);