import { Button,Avatar } from '@material-ui/core';
import React from 'react';
import './Tweetbox.css';

function Tweetbox() {
    return (
        <div className="tweetBox">
            <form>
                <div className="tweetBox__input">
                    <Avatar src="https://www.denofgeek.com/wp-content/uploads/2017/03/darth-vader-1_0.jpg?resize=768%2C432"></Avatar>
                    <input placeholder="what's happening?" type="text"></input>
                </div>
                <input className="tweetBox__imageInput" placeholder="OPtional:Enter image URL" type="text"></input>
                

                <Button className="tweetBox__tweetButton">Tweet</Button>
            </form>
        </div>
    )
}

export default Tweetbox
