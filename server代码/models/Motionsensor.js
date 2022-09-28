const mongoose = require('mongoose');
module.exports = mongoose.model('Motion', new mongoose.Schema({
    type:String,
    topic:String,
    location:String,
    level:String,
    name:String,
 sensordata:[{time:String,speed:Number}]
}));