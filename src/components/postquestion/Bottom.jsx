import React from 'react';
import { useContext,useState } from 'react';
import './App.css';
import { db2 } from "../../utils/firebase";
import {  ArticleContextpost } from '../../context/articles.post';
import { set, ref, onValue, remove, update } from "firebase/database";
import { useNavigate } from "react-router-dom";


function Bottom(){
   const {currentArticle}=useContext(ArticleContextpost)
   const nav = useNavigate();
   function writeUserData() {
    set(ref(db2,  currentArticle.name), {
      type:currentArticle.type,
      topic:currentArticle.topic,
      location:currentArticle.location,
      time:currentArticle.time,
      level:currentArticle.level,
      name:currentArticle.name,
      status:currentArticle.status,
      turnOfftime:"00:00",
      turnOntime:"00:00",
      brightness:0,
      smartmode:"on",
    });
  }


   const handleSubmit1=async(event)=>
   {
     event.preventDefault();
     try{
      {
      currentArticle.time=new Date()}
      writeUserData()
      alert("upload successfully")
      nav("/Devicelist");
     }
     catch(error){
       console.log('error in uploading ',error.message)
       alert(error.message)
   }
 }

   return(
    <div>
    <button class="button1" onClick={handleSubmit1} >Post</button>
 
    </div>
    );
   }
   export default Bottom