import React,{useContext} from 'react';
import Bottom  from '../components/postquestion/Bottom';
import Post from '../components/postquestion/Post';
import Articles from '../components/postquestion/Articles';
function Postcard() {
    return(
        <div>
            <Post/>
            <Articles/>
            <Bottom/>
            </div>);
}
 
export default Postcard;