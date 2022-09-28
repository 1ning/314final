import React from 'react';
import './Homepage.css';
import { Link } from 'react-router-dom';

function Search(){
   return(
    <div>
    <div class="Subscribe" >
        <strong class="Signup">Building Lighting Management System</strong>
    <Link to="/Login"> <button class="Button">Login</button></Link>
    <Link to="/Signup"> <button class="Button">Signup</button></Link>
    <Link to="/Showpage"> <button class="Button">View</button></Link>
    </div> 
    </div>
    );
}
export default Search