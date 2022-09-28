import React from 'react';
import Login from './routes/Login';
import Postcard from './routes/Post';
import Reset from './routes/Reset';
import {  Route, Routes } from "react-router-dom"
import Signup from './routes/Signup';
import Homepage from './routes/HomePage'
import Control from './routes/Control';
import Devicelist from './routes/Devicelist';
import Devicelist2 from './routes/Devicelist2';
import Showpage from './routes/Showpage';
function App() {
    return(
    <Routes>
    <Route path='/' element={ <Homepage/>}/>
    <Route path='/Showpage' element={ <Showpage/>}/>
    <Route path='/Devicelist2' element={ <Devicelist2 />}/>
    <Route path='/Control' element={ <Control />}/>
    <Route path='/Devicelist' element={ <Devicelist />}/>
    <Route path='/Post' element={ <Postcard />}/>
    <Route path='/Login' element={ <Login />}/>
    <Route path='/Signup' element={ <Signup />}/>
    <Route path='/Reset' element={ <Reset />}/>
    </Routes>
    )     
}
 
export default App;