const mongoose = require('mongoose');
const heroSchema = mongoose.Schema({
    title:String,
    description:String,
    imgBackground:String
});
module.exports = mongoose.model('Hero',heroSchema);