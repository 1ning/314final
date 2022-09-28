import React from 'react';
import './Homepage.css';

function Subscribe(){
   return(
    <div>
    <form action="http://127.0.0.1:8000" method="POST" />
    <div class="Subscribe" >
        <strong class="Signup1">SIGN UP FOR OUR DAILY INSIDER</strong>
        <input type="email" id="email" name="email" placeholder="Enter your email" required="required" />
        <input type="submit" value="Subscribe" class="Submit"/>
    </div> 
    
    </div>
    );
}
export default Subscribe