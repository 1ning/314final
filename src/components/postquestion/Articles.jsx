import React,{useContext} from 'react';
import { useState } from "react";
import './App.css';
import {  ArticleContextpost } from '../../context/articles.post';
import { Form } from 'semantic-ui-react'
function Article(){
  //upload photo
  var [Name, setname] = useState('Corridor');
  const handleChange33 = ()=>{

  if(Name==='Corridor')
      Name='Room';
   else
      Name='Corridor';
      setname(Name)
      var k=contact;
      k.type=Name;
      setContact(k);
  }
  const[contact,setContact]=useState({
    type:'Corridor',
    topic:'',
    location:'',
    time:'',
    level:'1',
    name:'',
    status:'off',
  })

  const {setCurrentArticle}=useContext(ArticleContextpost)

  const {type,topic, location, level} = contact;
  //clear data
  //update data that need upload
  const handleChange=(event)=>
  {
  const {name,value}=event.target
  setContact((preValue)=>{
   return{
    ...preValue,
    [name]:value
   }
  })
  }
  setCurrentArticle(contact);

   return(
    <div>
      <div>
        <div class="Radio">
            <Form>
            <Form.Group inline>
            <span class="Radio1">Select light type:</span> 
            <Form.Radio
                label='Corridor'
                name='radioGroup'
                value='Corridor'
                checked={Name==='Corridor'}
                onChange={handleChange33}
              />
            <Form.Radio
                label='Room'
                name='radioGroup'
                value='Room'
                checked={Name==='Room'}
                onChange={handleChange33}
              />
               </Form.Group>
          </Form>
        </div> 
        </div>
    <div  class="Radio">
    <div class="Radio2"><span class="Radio1">Name</span>          
    <input type="text" placeholder='Please input the device name' class="textbox" name="name" onChange={handleChange} value={contact.name}/> </div>
    <div class="Radio2"><span class="Radio1">Topic</span>          
    <input type="text" placeholder='Please input the device topic' class="textbox" name="topic" onChange={handleChange} value={contact.topic}/> </div>
   <div  class='Radio2'>
   <span class="Radio1">Location</span> 
   <input type="text" class='textbox' placeholder="Enter the light location"  name="location"onChange={handleChange} value={contact.location}/>
   </div>

<div class="Radio2">
  <span class='Radio1'>Security level</span> 
  <select onChange={handleChange} value={contact.level} name="level" id="level">
  <option value="1">1</option>
  <option value="2">2</option>
  <option value="3">3</option>
  <option value="4">4</option>
</select>
</div>
</div>
</div>

  
  
    );
}
export default Article