import React,{useContext} from 'react';
import { Accordion, Icon, Image, Item, Label,Button , Dropdown, Input } from 'semantic-ui-react'
import '../question.css';
import { useState } from "react";
import { db2 } from "../utils/firebase";
import { useEffect } from 'react';
import {  ArticleContext } from '../context/articles.context';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import { set, ref, onValue, remove, update } from "firebase/database";
import { Link } from 'react-router-dom';
import { ControlContext} from '../context/control.context';
import { UserContext} from '../context/user.context';
import {postrequest}  from "../utils/post.js";
import {postrequest2}  from "../utils/post.js";
import moment from 'moment'
function Devicelist(){

  const {setcurrentControl}=useContext(ControlContext)
  const {currentUser}=useContext(UserContext)
  const {staff2} = useContext(ArticleContext)
  const [a, b] = useState(0);
  const [h, f] = useState(0);
  const [commentShown, setCommentShown] = useState({});
  const [filteredStaff3,c]=useState(staff2)
  const [searchstate, setsearchstate] = useState("type");
  const [searchinfo, setsearchinfo] = useState("");
  var zzbb
 
  useEffect(() => {
    setInterval(() => {
      zzbb=moment().format('HH:mm'); 
      filteredStaff3.map(looptime)
    }, 20000);
  }, []);
  useEffect(
    ()=>{
        c(staff2);
    },
    [staff2]
  );
  function handleOnDragEnd(result) {
    if (!result.destination) return;
    const items = Array.from(filteredStaff3);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);
    c(items);
  }
  const handleChange=(event)=>
  {
    setsearchinfo(event.target.value);
  } 
  const handleonChange=()=>
  {
    filteredStaff3.map(turnonall);
  } 
  const handleoffChange=()=>
  {
    filteredStaff3.map(turnoffall);
  } 
  const handlesmartoffChange=()=>
  {
    filteredStaff3.map(turnoffsmartmode);
  } 
  const handlesmartonChange=()=>
  {
    filteredStaff3.map(turnonsmartmode);
  } 
  const filtersearch=async(event)=>
   {
     event.preventDefault();
     if(searchinfo==null)
     searchinfo=""
     b(a+1);
      if(searchstate=="type"){
      var d= staff2.filter((staff2)=>{
      return staff2.type.toLowerCase().includes(searchinfo.toLowerCase())
       })
       c(d);
      }
      if(searchstate=="location"){
        var d= staff2.filter((staff2)=>{
        return staff2.location.toLowerCase().includes(searchinfo.toLowerCase())
         })
         c(d);
        }
        if(searchstate=="topic"){
          var d= staff2.filter((staff2)=>{
          return staff2.topic.toLowerCase().includes(searchinfo.toLowerCase())
           })
           c(d);
          }
          if(searchstate=="level"){
            var d= staff2.filter((staff2)=>{
              return staff2.level.toLowerCase().includes(searchinfo.toLowerCase())
               })
             c(d);
            }
            if(searchstate=="status"){
              var d= staff2.filter((staff2)=>{
                return staff2.status.toLowerCase().includes(searchinfo.toLowerCase())
                 })
               c(d);
              }
     return 
   }
  return(
    <div>
    <div class="box3">
   <input type="text" id="search" placeholder="Search .." required="required"  onChange={handleChange}/>
        <select id="selection" value={searchstate} 
              onChange={(e) => setsearchstate(e.target.value)}
              >
        <option value="topic">topic</option>
        <option value="type">type</option>
        <option value="location">location</option>
        <option value="level">level</option>
        <option value="status">status</option>
      </select>
      <button onClick={filtersearch} class="submit">search</button>
      </div>
      <div class="box3">
      <span class="Globalswicthes">
        Global switches
        </span>
        <div class="global">
        <div class="lightbox2 "><button class="switch2"  onClick={handleonChange}>Turn on All</button></div>
        <div class="lightbox2 "><button class="switch2" onClick={handleoffChange}>Turn off All</button></div>
        <div class="lightbox2 "><button class="switch2" onClick={handlesmartonChange}>SmartMode Turn on All</button></div>
        <div class="lightbox2 "><button class="switch2" onClick={handlesmartoffChange}>SmartMode Turn off All</button></div>
        <div class="lightbox2 "><Link to="/Post"><button class="switch2">Add new device</button></Link></div>
        </div>
        </div>
        <div class="box3">
      <div class="headbox2"> 
      <div class="big2">
        <div class="lightbox "> <strong class="light">Name</strong> </div>
        <div class="lightbox "><strong class="light">Type</strong>  </div>
        <div class="lightbox "><strong class="light">Location</strong> </div>
        <div class="lightbox ">  <strong class="light">Level</strong> </div> 
        <div class="lightbox "> <strong class="light">Status</strong>  </div>
            <div class="lightbox "> <strong class="light">SmartMode</strong>  </div>
        <div class="lightbox "> <strong class="light">Actions</strong>  </div>
       </div>
       </div> 
      <DragDropContext onDragEnd={handleOnDragEnd}>
     <Droppable droppableId="characters">
     {(provided) => ( 
    <div className="characters" {...provided.droppableProps} ref={provided.innerRef}>
    {filteredStaff3.map(Search2)}
    </div>   
    )}
    </Droppable>
        </DragDropContext>
        </div>
    </div>
    );



function looptime(item,i)
{
  if(zzbb==item.turnOfftime)
  {
    update(ref(db2, `/${item.name}`), {
    status:"off"
   });
   };
   if(zzbb==item.turnOntime)
   {
    update(ref(db2, `/${item.name}`), {
     status:"on"
    });
  }
}

function turnonall(item,i)
{

  if(item.status!="on")
  { 
   update(ref(db2, `/${item.name}`), {
    status:"on"
   });
  } 
  if(i==(filteredStaff3.length-1))
  {
   var globalaction={
    status:"on",
   }
   postrequest2(globalaction);
  }
}
function turnonsmartmode(item,i)
{
  if(item.smartmode!="on")
  {
  update(ref(db2, `/${item.name}`), {
    smartmode:"on"
   });
   item.smartmode="on"
  }
}
function turnoffsmartmode(item,i)
{

  if(item.smartmode!="on")
  {
  update(ref(db2, `/${item.name}`), {
    smartmode:"off"
   });
   item.smartmode="off"
  }
}
function turnoffall(item,i)
{
  if(item.status!="off")
  {
    update(ref(db2, `/${item.name}`), {
    status:"off"
   });
  }
   if(i==(filteredStaff3.length-1))
   {
    var globalaction={
     status:"off",
    }
    postrequest2(globalaction);
   }

}

function Search2(item,i){

  const handleDelete = () => {
    remove(ref(db2, `/${item.name}`));
  };
  const handleOn = () => {
    if(item.status!="on")
    {
    update(ref(db2, `/${item.name}`), {
     status:"on"
    });
    item.status="on"
    postrequest(item);
  }
  };
  const handleOff = () => {
    if(item.status!="off")
    {
    update(ref(db2, `/${item.name}`), {
      status:"off"
     });
     item.status="off"
     postrequest(item);
    }
  };
  const handleMore = () => {
    setcurrentControl(item)
  };
    if(!commentShown[item.topic])
    {
      return(
        <Draggable key={item.name} draggableId={item.name} index={i}>
        {(provided) => (
            <div ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
          <div class="headbox1">
          <div class="big2">
          <div class="lightbox "><span class="light">{item.name}</span></div>
           <div class="lightbox "><strong class="light">{item.type}</strong></div>
           <div class="lightbox "><span class="light">{item.location }</span></div>
           <div class="lightbox "><span class="light">{item.level}</span>  </div>
           <div class="lightbox "><span class="light">{item.status}</span></div>
           <div class="lightbox "><span class="light">{item.smartmode}</span></div>
           {/* here to wirte request and response*/}
           <div class="lightbox "><button class="switch" onClick={handleOn}>on</button><button class="switch" onClick={handleOff}>off</button>
           <Link to="/Control"><button class='switch'    onClick={handleMore}>More</button></Link>
           </div> 
        </div>
        <div>
          <button  class='SD'  onClick={handleDelete}>
          <Icon name='angle right' />
            Delete
          </button>
          </div>
        </div>
        </div>
       )}
       </Draggable>
     );
    }
 };
};

 export default Devicelist