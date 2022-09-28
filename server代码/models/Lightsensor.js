const mongoose = require('mongoose');
module.exports = mongoose.model('Lightsensor', new mongoose.Schema({
    type:String,
    topic:String,
    location:String,
    level:String,
    name:String,
 sensordata:[{time:String,light:Number}]
}));