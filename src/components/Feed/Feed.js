import React,{useState,useEffect} from 'react';
import Post from '../Post/Post';
import './Feed.css';
import Tweetbox from './Tweetbox';
import db from "../../firebase";

function Feed() {
const [ Posts, setPosts] = useState([]);

useEffect(() => {
db.collection('Posts').onSnapshot(snapshot=>(
    setPosts(snapshot.docs.map(doc=> doc.data()))
))


}, [])



    return (
        

        <div className="feed">
            <div className="feed__header">
            <h2>Home</h2>
            </div>
           <Tweetbox/>

           {Posts.map(post=> (
            <Post  
            key={post.id}
            displayName={post.displayName} 
            username={post.username}
            verfied={post.verfied}
            text={post.text}
            avatar={post.avatar}
            image={post.image}
            
            />
                ))}
        

        </div>
    )
}

export default Feed
