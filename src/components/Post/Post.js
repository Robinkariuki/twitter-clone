import { Avatar } from '@material-ui/core'
import React from 'react'
import './Post.css'
import VerifiedUserIcon from '@material-ui/icons/VerifiedUser';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import RepeatIcon from '@material-ui/icons/Repeat';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import PublishIcon from '@material-ui/icons/Publish';
import { VerifiedUser } from '@material-ui/icons';

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
                <Avatar src={avatar}></Avatar>

            </div>
        <div className="post__body">
             <div className="post__header"> 
             <div className="psot__headerText">
                 <h3>
    {displayName}{" "} <span className="post__headerSpecial"> 
    { verfied && <VerifiedUserIcon className="post__badge"/>}@{username}
                        </span> 
                 </h3>
             </div>
             <div className="post__headerDescription">
    <p>{text}</p> 

             </div>
             <img src={image} alt=""/>
             <div className="post__footer">
        <ChatBubbleOutlineIcon fontSize="small"/>
        <RepeatIcon fontSize="small"/>
        <FavoriteBorderIcon fontSize="small"/>
        <PublishIcon fontSize="small"/>
             </div>
             </div>
        </div>
        </div>
    )
}

export default Post;
