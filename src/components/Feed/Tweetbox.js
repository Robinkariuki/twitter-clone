import { Button,Avatar } from '@material-ui/core';
import React from 'react';
import './Tweetbox.css';

function Tweetbox() {
    return (
        <div className="tweetBox">
            <form>
                <div className="tweetBox__input">
                    <Avatar src="https://www.denofgeek.com/wp-content/uploads/2017/03/darth-vader-1_0.jpg?resize=768%2C432"></Avatar>
                </div>
                <input placeholder="what's happening?"></input>
                <Button>Tweet</Button>
            </form>
        </div>
    )
}

export default Tweetbox
