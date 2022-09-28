const mqtt = require('mqtt')
const client = mqtt.connect("mqtt://broker.hivemq.com:1883");
//Statement of data for drones
var light=
{ 
    type:"Corridor",
    topic:"1335",
    location:"56465",
    name:"1",
    status:"on",
    smartmode:'on',
    light:40
}

    var topic="/Topic/"+light.topic+"/lightsensor";

client.on('connect', () => 
{
 console.log('mqtt connected');
 //Set topics to be published every 20 seconds to simulate real devices sending data to the server constantly
 setInterval(sensortest, 20000);
    function sensortest(){
    //publis Topic
    client.publish(topic, JSON.stringify(light),);
}
client.publish(topic, JSON.stringify(light),);
});
client.on('message', (topic, message) => 
{
  console.log(message.toString());
});