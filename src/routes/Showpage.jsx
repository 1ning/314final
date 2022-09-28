import React,{useContext} from 'react';
import '../showpage.css';
import { useState } from "react";
import { useEffect } from 'react';
import {  ArticleContext } from '../context/articles.context';
function Showpage(){

  const {staff2} = useContext(ArticleContext)
  const [commentShown, setCommentShown] = useState({});
  const [filteredStaff3,c]=useState(staff2)
  
  useEffect(
    ()=>{
        c(staff2);
    },
    [staff2]
  );


  return(
    <div class="big">
    <div class="ui four cards" id="sadasd">
   {filteredStaff3.map(Search2)}
   {filteredStaff3.map(Search2)}
   {filteredStaff3.map(Search2)}
   {filteredStaff3.map(Search2)}
   {filteredStaff3.map(Search2)}
      </div>
      </div>
    );



function bb(currentValue,status)
{
  if(currentValue<=40&&status=="on")
  return(   <img class="headphoto" src={"/photo/ON2.png"} alt="light" />)
  if(currentValue>40&&status=="on"&&currentValue<70)
  return(   <img class="headphoto" src={"/photo/ON1.png"} alt="light" />)
  if(currentValue>=70&&status=="on")
  return(   <img class="headphoto" src={"/photo/ON.png"} alt="light" />)
  else{
    return(   <img class="headphoto" src={"/photo/OFF.png"} alt="light" />)
  }
}
function Search2(item,i){
    if(!commentShown[item.topic])
    {
      return(
        <div class="light">
            {bb(item.brightness,item.status)}
            <div class="tip">Name:{item.name}</div>
            <div class="tip">Location:{item.location}</div>
            </div>
     );
    }
 };
};

 export default Showpage
