import React from 'react';
import '../Control.css';
import { useState } from "react";
import { set, ref, onValue, remove, update } from "firebase/database";
import { db2 } from "../utils/firebase";
import { useContext} from 'react';
import { ControlContext} from '../context/control.context';
import { TimePicker } from 'react-ios-time-picker';
import Slider from '../components/slider/Slider';
import moment from 'moment'
const Controll=()=>{

const {setcurrentControl}=useContext(ControlContext)
const {currentControl}=useContext(ControlContext)
const [value, setValue] = useState(currentControl.turnOntime);
const [value2, setValue2] = useState(currentControl.turnOntime);
const [value3, setValue3] = useState(currentControl.smartmode);

  var name=currentControl.name;
  function post(item)
{
  var hh=moment().format('hh:mm:ss DD/MM/YYYY'); 
  var z=item;
  z.time=hh;
  delete z.level;
  delete z.topic;
  delete z.turnOfftime;
  delete z.turnOntime;
  fetch('http://127.0.0.1:4000/', {
    method: 'POST',
    body: JSON.stringify(
      z
   ),
    headers: {
       'Content-type': 'application/json; charset=UTF-8',
    }, 
  })
    .then((res) => res.json())
    .then(data=>JSON.parse(data))
    .catch((err) => {
       console.log(err.message);
    });
}
  const onChange1 = (timeValue) => {
    setValue(timeValue);
    update(ref(db2, `/${name}`), {
      turnOntime:timeValue
     });
 }
 const onChange2 = (timeValue2) => {
  setValue2(timeValue2);
  update(ref(db2, `/${name}`), {
    turnOfftime:timeValue2
   });
}

const onChange3 = () => {
  if(value3=="on")
  setValue3("off");
  else
  setValue3("on");
  update(ref(db2, `/${name}`), {
    smartmode:value3
   });
}
    
   return(
    <div class="box1">
      <div class="box3"><Slider /></div> 
      <div class="timepicker">Turn on smart mode</div> 
      <div class="timepicker2"><button class="smartmode" onClick={onChange3}>{value3=='off'?"Off":"On"}</button></div> 
      <div class="timepicker2">Set light automatic turn on time</div> 
      <div class="timepicker2"><TimePicker onChange={onChange1} value={value} /></div>
      <div class="timepicker2">Set light automatic turn off time</div> 
      <div class="timepicker2"><TimePicker onChange={onChange2} value={value2} /></div>
    </div>
    );
  }
  

export default Controll