import React from 'react';
import './Homepage.css';
import { Icon} from 'semantic-ui-react'
function Bottom(){
    return(
 <div class="bottompage">
  <div class="item1">
    <div class="header"><strong>Explore</strong></div>
    <div class="menu">
      <a class="item">About</a>
      <a class="item">Stories</a>
      <a class="item">Introduction</a>
      <a class="item">Goals</a>
    </div>
    </div>
    <div class="item2">
    <div class="header"><strong>Support</strong></div>
    <div class="menu">
      <a class="item">FAQs</a>
      <a class="item">Help</a>
      <a class="item">Contact us</a>
    </div>
    </div>
    <div class="item2">
    <div class="header"><strong>Stay connected</strong></div>
    <div class="menu">
    <i class="facebook icon" id="social"></i>
    <i class="twitter icon" id="social"></i>
    <i class="instagram icon" id="social"></i>
    </div>
    </div>
    <div class="head">
    <strong>Smart Light@Deakin &nbsp; 2022</strong>
    </div>
    <div class="head">
    <a class="item3">Privacy policy</a> 
    <a class="item3">Terms </a>
    <a class="item3">Code of Conduct </a>
    </div>
  </div>
     );
 }
 export default Bottom