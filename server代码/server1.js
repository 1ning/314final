const mqtt = require('mqtt')
const express = require("express");
const cors = require('cors');
const bodyParser = require("body-parser");
const app = express();
const https = require('https')
const mongoose=require("mongoose")
const uri = "mongodb+srv://993450372:w5290718@cluster0.huvbvtg.mongodb.net/?retryWrites=true&w=majority";
const client = mqtt.connect(("mqtt://broker.hivemq.com:1883"));
var moment = require('moment');
const Sensor = require('./models/sensor');
const Global = require('./models/global');
const LightSensor = require('./models/Lightsensor');
const MotionSensor = require('./models/Motionsensor');
const VoiceSensor=require('./models/Voicesensor');
const TemperatureSensor=require('./models/Temperaturesensor')
var topic="/Topic/#"


var plotly = require('plotly')("993450372", "LLujjEinlGaC3OKphxwm")
var data2 =
 {
 x: [],
 y: [],
 type: "scatter",
 mode: 'markers',
 name: 'Percent of estimated voting age population',
 line: {
  width: 1,
},symbol: 'diamond-open-dot', 
size: 16
 };
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
//Record each each artificial switch
app.post("/", (req, res) => {
      if (req) {
        console.log(req.body)
        mongoose.connect(uri);
        var sensordata2={time:req.body.time,brightness:req.body.brightness, status:req.body.status}
        Sensor.findOne({name: req.body.name},async (err,list)=>{
          if (list == null) 
          {
            const Sensordata = new Sensor({
              type: req.body.type,
              name: req.body.name,
              location: req.body.location,
             })
            Sensordata.sensordata.push(sensordata2)
            Sensordata.save().then(doc => {
             console.log(doc);
            }).then(() => {
              });   
          }
          else{
            console.log(sensordata2)
            Sensor.updateOne ( { name:req.body.name },{ $push: { sensordata: sensordata2} },(err)=>{
              if (err) {console.log(err.message)}}) 
          }
        }
         )} 
         else {
        throw new Error("request cannot be empty");
      }
      if(req.body.action!=1)
      {
      data2.y.push(req.body.name);
      data2.x.push(req.body.time);
      var graphOptions = {filename: "human sensordata", fileopt:
      "extend"};
      plotly.plot(data2, graphOptions, function (err, msg) {
       if (err) return console.log(err);
       console.log(msg);
      })
     }
    });
    app.post("/global", (req, res) => {
      if (req) {
        console.log(req.body)
        mongoose.connect(uri);
        const Sensordata = new Global({
            time:req.body.time,
            status:req.body.status,
           })
          Sensordata.save().then(doc => {
           console.log(doc);
          }).then(() => {
            });   
          }
         else {
        throw new Error("request cannot be empty");
      }
    });





    var options = {
      hostname: 'sit314final-default-rtdb.firebaseio.com',
      path: '/2/.json',
      port:null,
      method: 'PATCH',
      headers : {
       'Content-Type': 'application/json',
       },
    }
   

   client.on('connect', () => 
   {
    client.subscribe(topic);
    console.log('mqtt connected');
   });
   client.on('message', (topic, message) => 
   {
    mongoose.connect(uri);
    var x=JSON.parse(message);
    var arr = topic.toString().split("/");
    switch(arr[3]) {
      case "lightsensor":
        if(x.status=="on"&&x.smartmode=="on")
        {
         var lightStrong=100-x.light
         var data2 = JSON.stringify({
            "brightness":lightStrong
         })
         updatedata(x.name,data2)
        }        
        var current_time = moment(Date.now()).format('YYYY-MM-DD HH:mm:ss')
        var sensordata2={time:current_time,light:x.light}
        LightSensor.findOne({name: x.name},async (err,list)=>{
          if (list == null) 
          {
            const Sensordata = new LightSensor({
              type: x.type,
              name: x.name,
              location: x.location,
             })
            Sensordata.sensordata.push(sensordata2)
            Sensordata.save().then(doc => {
             console.log(doc);
            }).then(() => {
              });   
          }
          else{
            console.log(sensordata2)
            LightSensor.updateOne ( { name:x.name },{ $push: { sensordata: sensordata2} },(err)=>{
              if (err) {console.log(err.message)}}) 
          }
        })
        break;
      case "motionsensor":
        if(x.smartmode=="on"&&x.type=="Corridor")
        {
          if(x.speed!=0)
          {
         var data2 = JSON.stringify({
            "status":"on"
         })
         }
         if(x.speed==0)
         {
        var data2 = JSON.stringify({
           "status":"off"
        })
        }
        console.log(data2)
         updatedata(x.name,data2)
        }        
        var current_time = moment(Date.now()).format('YYYY-MM-DD HH:mm:ss')
        var sensordata2={time:current_time,speed:x.speed}
        MotionSensor.findOne({name: x.name},async (err,list)=>{
          if (list == null) 
          {
            const Sensordata = new MotionSensor({
              type: x.type,
              name: x.name,
              location: x.location,
             })
            Sensordata.sensordata.push(sensordata2)
            Sensordata.save().then(doc => {
             console.log(doc);
            }).then(() => {
              });   
          }
          else{
            console.log(sensordata2)
            MotionSensor.updateOne ( { name:x.name },{ $push: { sensordata: sensordata2} },(err)=>{
              if (err) {console.log(err.message)}}) 
          }
        })
        // code block
        break;
      case "voicesensor":
        if(x.smartmode=="on"&&x.type=="Corridor")
        {
          if(x.voice!=0)
          {
         var data2 = JSON.stringify({
            "status":"on"
         })
         }
         if(x.voice==0)
         {
        var data2 = JSON.stringify({
           "status":"off"
        })
        }
        console.log(data2)
         updatedata(x.name,data2)
        }        
        var current_time = moment(Date.now()).format('YYYY-MM-DD HH:mm:ss')
        var sensordata2={time:current_time,voice:x.voice}
        VoiceSensor.findOne({name: x.name},async (err,list)=>{
          if (list == null) 
          {
            const Sensordata = new VoiceSensor({
              type: x.type,
              name: x.name,
              location: x.location,
             })
            Sensordata.sensordata.push(sensordata2)
            Sensordata.save().then(doc => {
             console.log(doc);
            }).then(() => {
              });   
          }
          else{
            console.log(sensordata2)
            VoiceSensor.updateOne ( { name:x.name },{ $push: { sensordata: sensordata2} },(err)=>{
              if (err) {console.log(err.message)}}) 
          }
        })
        break;
      case 'temperaturesensor':
      if(x.smartmode=="on")
    {
     if(x.temperature>65&&x.temperature<100)
    {
    var data2 = JSON.stringify({
    "brightness":40,
     })
     }
      if(x.temperature>100)
    {
    var data2 = JSON.stringify({
   "brightness":10,
    })
    }
   if(data2!=null)
    updatedata(x.name,data2)
   
   var current_time = moment(Date.now()).format('YYYY-MM-DD HH:mm:ss')
   var sensordata2={time:current_time,temperature:x.temperature}
   TemperatureSensor.findOne({name: x.name},async (err,list)=>{
  if (list == null) 
  {
    const Sensordata = new TemperatureSensor({
      type: x.type,
      name: x.name,
      location: x.location,
     })
    Sensordata.sensordata.push(sensordata2)
    Sensordata.save().then(doc => {
     console.log(doc);
    }).then(() => {
      });   
  }
  else{
    console.log(sensordata2)
    TemperatureSensor.updateOne ( { name:x.name },{ $push: { sensordata: sensordata2} },(err)=>{
      if (err) {console.log(err.message)}}) 
    }
  })
    }
    break;
    }
   });



   function updatedata(updatename,data1)
   {
      options.path='/'+updatename+'/.json'
      const req = https.request(options, res => {
        console.log(`${res}`)
        res.on('data', d => {
          process.stdout.write(d)
        })
      })
      req.on('error', error => {
        console.error(error)
      })
      req.write(data1)
      req.end()
   }









  app.listen(4000, function (req, res) {
   console.log("Web server is running in " + 4000 + "...");
 });
