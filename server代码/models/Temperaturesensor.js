const mongoose = require('mongoose');
module.exports = mongoose.model('Temperature', new mongoose.Schema({
    type:String,
    topic:String,
    location:String,
    level:String,
    name:String,
    status:String,
 sensordata:[{time:String,temperature:Number}]
}));