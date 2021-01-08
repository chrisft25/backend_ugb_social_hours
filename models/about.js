const mongoose = require('mongoose');
const aboutSchema = mongoose.Schema({
    aboutDescription:String,
    vision:String,
    mission:String
});
module.exports = mongoose.model('About',aboutSchema);