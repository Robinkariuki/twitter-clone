import { Avatar } from '@material-ui/core'
import React from 'react'
import './Post.css'
import VerifiedUserIcon from '@material-ui/icons/VerifiedUser';

function Post({
    displayName,
    username,
    verfied,
    image,
    text,
    avatar
}) {
    return (
        <div className="post">
            <div className="post__avatar">
                <Avatar src="https://www.denofgeek.com/wp-content/uploads/2017/03/darth-vader-1_0.jpg?resize=768%2C432"></Avatar>

            </div>
        <div className="post__body">
             <div className="post__header"> 
             <div className="psot__headerText">
                 <h3>
                    Robin karis{" "} <span>
                        <VerifiedUserIcon className="post__badge"/>
                        </span> 
                 </h3>

             </div>
             </div>
        </div>
        </div>
    )
}

export default Post
