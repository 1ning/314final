const mongoose = require('mongoose');
module.exports = mongoose.model('Human2', new mongoose.Schema({
    type:String,
    topic:String,
    location:String,
    level:String,
    name:String,
 sensordata:[{time:String,brightness:Number, status:String}]
}));