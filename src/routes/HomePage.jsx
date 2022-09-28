import React from 'react';
import Subscribe from '../components/homepage/Subscribe';
import Search from '../components/homepage/Search';
import Headphoto from '../components/homepage/Headphoto'
import Tutorials from '../components/homepage/Tutorials';
import Bottom from '../components/homepage/Bottom';
import '../App.css';
function HomePage() {
    return(  
        <div class="backgroundbox">
           <Search />
           <Headphoto />
           <Tutorials />
           <Subscribe/>
           <Bottom/>
        </div>);
}
export default HomePage;