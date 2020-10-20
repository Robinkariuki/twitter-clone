import { Button,Avatar } from '@material-ui/core';
import React,{useState} from 'react';
import './Tweetbox.css';
import db from '../../firebase';
function Tweetbox() {
    const [tweetMessage,setTweetMessage] = useState('')
    const [tweetImage,setTweetImage] = useState('')

   const sendTweet = (e) =>{
       e.preventDefault();
       
       db.collection('Posts').add({
           displayName:"dennis",
           username:"hidra",
           verified:true,
           text:tweetMessage,
           image:tweetImage,
           avatar:"https://www.denofgeek.com/wp-content/uploads/2017/03/darth-vader-1_0.jpg?resize=768%2C432"

    });
    setTweetMessage("");
    setTweetImage("");

   } 

    return (
        <div className="tweetBox">
            <form>
                <div className="tweetBox__input">
                    <Avatar src="https://www.denofgeek.com/wp-content/uploads/2017/03/darth-vader-1_0.jpg?resize=768%2C432"></Avatar>
                    <input
            onChange={(e) => setTweetMessage(e.target.value)}
            value={tweetMessage}
            placeholder="What's happening?"
            type="text"
          />
                </div>
                <input  onChange={(e)=>setTweetImage(e.target.value)}   value={tweetImage} className="tweetBox__imageInput" placeholder="OPtional:Enter image URL" type="text"></input>
                

                <Button onClick={sendTweet} type="submit" className="tweetBox__tweetButton">Tweet</Button>
            </form>
        </div>
    )
}

export default Tweetbox
