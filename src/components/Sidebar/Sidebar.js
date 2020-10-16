import React from 'react';
import './Sidebar.css';
import HomeIcon from '@material-ui/icons/Home';
import TwitterIcon from '@material-ui/icons/Twitter';

function Sidebar() {
    return (
        <div className="sidebar">
         <TwitterIcon/>
         <HomeIcon/>
        </div>
    )
}

export default Sidebar


