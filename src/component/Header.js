import React, { useState } from 'react';

import '../css/header.css';
import { Link } from "react-router-dom";

import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import VideoCallIcon from '@material-ui/icons/VideoCall';
import AppsIcon from '@material-ui/icons/Apps';
import NotificationsIcon from '@material-ui/icons/Notifications';
import Avatar from '@material-ui/core/Avatar';

export default function Header() {

  const [inputSearch, setInputSearch] = useState('');

  return (
    <div className="header">

        <div className="header_left">
            <MenuIcon />

            <Link to="/">
              <img 
              className="header_logo"
              src="https://upload.wikimedia.org/wikipedia/commons/9/98/YouTube_Logo.svg"
              alt="logo" />
            </Link>
        </div>
        
        <div className="header_input">
            <input
            onChange={(e) => setInputSearch(e.target.value)}
            value={inputSearch}
            placeholder="Search"
            type="text"
            />

            <Link to={`/search/${inputSearch}`}>
              <SearchIcon className="header_inputBtn"/>
            </Link>
        </div>

        <div className="header_right">
            <VideoCallIcon className="header_icon" />
            <AppsIcon className="header_icon" />
            <NotificationsIcon className="header_icon" />
            <Avatar>N</Avatar>
            {/* <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" /> */}
        </div>

    </div>
  );
}
