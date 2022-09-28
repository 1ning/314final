import { useState } from "react";
import ReactSlider from "react-slider";
import React from 'react';
import './Slider.css';
import { ControlContext} from '../../context/control.context'
import { useContext} from 'react';
import { set, ref, onValue, remove, update } from "firebase/database";
import { db2 } from "../../utils/firebase";
import {postrequest}  from "../../utils/post.js";
import moment from 'moment'
const Slider = () => {
  const {setcurrentControl}=useContext(ControlContext)
  const {currentControl}=useContext(ControlContext) 
  const[picture,setpicture]=useState(currentControl.status)
  const [currentValue, setCurrentValue] = useState(currentControl.brightness);
  var name=currentControl.name;
 
  const handleChange=()=>
  {   
    if(picture=='on')
    {setpicture('off')
    currentControl.status="off"
    postrequest(currentControl);
     update(ref(db2, `/${name}`), {
        status:"off"
       });
    }
    else
    {
    setpicture('on')
    currentControl.status="on"
    postrequest(currentControl);
    update(ref(db2, `/${name}`), {
      status:"on"
     });
    }
  }
  function bb()
{
  if(currentValue<=40&&currentControl.status=="on")
  return(   <img class="headphoto" src={"/photo/ON2.png"} alt="light" onClick={handleChange}/>)
  if(currentValue>40&&currentControl.status=="on"&&currentValue<70)
  return(   <img class="headphoto" src={"/photo/ON1.png"} alt="light" onClick={handleChange}/>)
  if(currentValue>=70&&currentControl.status=="on")
  return(   <img class="headphoto" src={"/photo/ON.png"} alt="light" onClick={handleChange}/>)
  else{
    return(   <img class="headphoto" src={"/photo/OFF.png"} alt="light" onClick={handleChange}/>)
  }
}
   function HIT(){
    console.log(currentValue)
    if(currentControl.brightness!=currentValue)
    {
     currentControl.brightness=currentValue;
     postrequest(currentControl)
     update(ref(db2, `/${currentControl.name}`), {
      brightness:currentValue
     });
    }
   }
  return (
    <div>  
      {bb()}
      <div class="box2">{currentControl.name}</div>
      <div>
    <ReactSlider
      className="customSlider"
      thumbClassName="customSlider-thumb"
      trackClassName="customSlider-track"
      markClassName="customSlider-mark"
      marks={20}
      min={0}
      max={100}
      defaultValue={0}
      value={currentValue}
      onAfterChange={HIT}
      onChange={(value) => setCurrentValue(value)}
      renderMark={(props) => {
         if (props.key < currentValue) {
           props.className = "customSlider-mark customSlider-mark-before";
         } else if (props.key === currentValue) {
           props.className = "customSlider-mark customSlider-mark-active";
         }
         return <span {...props} />;
      }}
    />
    </div>
  
    </div>
  );
};

export default Slider;