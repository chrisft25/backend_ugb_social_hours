const mongoose = require('mongoose');
const addressSchema = mongoose.Schema({
    address:String,
    secondLine:String,
    url:String
});
module.exports = mongoose.model('Address',addressSchema);