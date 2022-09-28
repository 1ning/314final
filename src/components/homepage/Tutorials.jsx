import React from 'react';
import './Homepage.css';
import tutorials from './featuredtutorials';

function Tutorials(){
    return(
     <div class="head">
      <p class="title"><strong>Featured Tutorials</strong></p>
      <div>
      {tutorials.map(CommentItem)}
      </div>
      <button class="ui button" id="button2">
        See all Tutorials
      </button>
     </div>
   
     );
 }

 function CommentItem(item,i){
    return(
<div class="ui card" id="uicard">
  <div class="image">
    <img src={item.img} alt="sad"/>
  </div>
  <div class="content">
    <a class="header">{item.name}</a>
    <div class="description">
      {item.context}
    </div>
  </div>
</div>
)
 }
 export default  Tutorials