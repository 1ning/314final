import React from 'react';
import '../Login.css';
import { Link } from 'react-router-dom';
import{signinWithEmailAndPassword,SignInwithGooglePopup}from '../utils/firebase'
import { signOut,getAuth } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useContext} from 'react';
import { UserContext} from '../context/user.context';
import { useEffect } from 'react';
const Login=(props)=>{
  const {setCurrentUser}=useContext(UserContext)
  const {currentUser}=useContext(UserContext)
  const auth=getAuth()
  const[contact,setContact]=useState({
    email:'',
    password:'', 
  })
  useEffect(()=>{
    setCurrentUser(auth.currentUser)
   
  },[])
  const {email, password} = contact;
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
    const nav = useNavigate();
    const Loginout = () => {
      if(currentUser==null)
      {
        alert("You are not logged in")
      }
      else{
        auth.signOut();
        setCurrentUser(null)
      }
    };
const logGoogleUser=async()=>
{
  const response=await SignInwithGooglePopup();
  console.log(response);
  nav("/Devicelist2");
}
    const handleSubmit=async(event)=>
    {
      event.preventDefault();
      try{
        const response=await signinWithEmailAndPassword(email,password);
        console.log(auth.currentUser.email)
        setCurrentUser(response)
        if(auth.currentUser.email=="admin@deakin.edu.au")
         nav("/Devicelist");
         else{
          nav("/Devicelist2");
         }
      }
      catch(error){
        console.log('error in logining',error.message)
    }
  }

   return(
    <div class="backgroundbox">
    <div class="loginbox">
    <div align="right"> 
    <Link to="/Signup"> <button class="signup">Sign up</button></Link>
    </div>
    <form action="" class="form">
      <label for="" class="label">Your Email</label>
      <div class="inputContainer">
        <input name="email" type="text" class="input1" onChange={handleChange} value={contact.email} />
      </div>
      <label for="" class="label">Your password</label>
      <div class="inputContainer">
        <input name="password" type="password" class="input1" onChange={handleChange} value={contact.password}/>
      </div>
      <div class="inputContainer">
      <input type="submit" class="submitBtn" value="Login" onClick={handleSubmit}/>
      </div>
    </form>
      <div class="inputContainer">
      <input type="submit" class="submitBtn" value="Login with Google" onClick={logGoogleUser}/>
      </div>
      <div>
          Forget password? <Link to="/Reset"><span class="find">Find</span></Link> now.
        </div>
  </div>
  </div>
    );
  
  if(1==2){
    return(
      <div class="backgroundbox">
      <div class="loginbox">
        <div>
        Welcome,
       <div>{auth.currentUser.email}</div>
        </div>
      <div class="inputContainer">
      <input type="submit" class="submitBtn" value="Loginout" onClick={Loginout}/>
        </div>
        </div>
        </div>
    )
  }
}
export default Login