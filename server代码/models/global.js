const mongoose = require('mongoose');
module.exports = mongoose.model('Global', new mongoose.Schema({
time:String,
status:String,
}));