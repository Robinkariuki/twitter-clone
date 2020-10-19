import React from 'react';
import Post from '../Post/Post';
import './Feed.css';
import Tweetbox from './Tweetbox';
function Feed() {
    return (
        <div className="feed">
            <div className="feed__header">
            <h2>Home</h2>
            </div>
           <Tweetbox/>
           <Post/>
           <Post/>
           <Post/>
           <Post/>
        </div>
    )
}

export default Feed
