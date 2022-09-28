const mqtt = require('mqtt')
const client = mqtt.connect("mqtt://broker.hivemq.com:1883");
//Statement of data for drones
var motion=
{ 
    type:"Corridor",
    topic:"1335",
    location:"56465",
    name:"1",
    status:"off",
    smartmode:'on',
    speed:4,
}

    var topic="/Topic/"+motion.topic+"/motionsensor";

client.on('connect', () => 
{
 console.log('mqtt connected');
 //Set topics to be published every 20 seconds to simulate real devices sending data to the server constantly
 setInterval(sensortest, 20000);
    function sensortest(){
    //publis Topic
    client.publish(topic, JSON.stringify(motion),);
}
client.publish(topic, JSON.stringify(motion),);
});
client.on('message', (topic, message) => 
{
  console.log(message.toString());
});