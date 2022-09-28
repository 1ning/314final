const mqtt = require('mqtt')
const client = mqtt.connect("mqtt://broker.hivemq.com:1883");

var temperature=
{ 
    type:"Corridor",
    topic:"1335",
    location:"56465",
    name:"1",
    status:"on",
    smartmode:'on',
    temperature:200,
}

    var topic="/Topic/"+temperature.topic+"/temperaturesensor";

client.on('connect', () => 
{
 console.log('mqtt connected');
 //Set topics to be published every 20 seconds to simulate real devices sending data to the server constantly
 setInterval(sensortest, 20000);
    function sensortest(){
    client.publish(topic, JSON.stringify(temperature),);
}
client.publish(topic, JSON.stringify(temperature),);
});
client.on('message', (topic, message) => 
{
  console.log(message.toString());
});