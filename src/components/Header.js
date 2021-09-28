import React from 'react';
import './css/Header.css';
import MenuIcon from '@material-ui/icons/MenuSharp';
import SearchIcon from '@material-ui/icons/Search';
import VideoCallIcon from '@material-ui/icons/VideoCall';
import AppsIcon from '@material-ui/icons/Apps';
import NotificationsIcon from '@material-ui/icons/Notifications';
import Avatar from '@material-ui/core/Avatar';

const Header = () => {
  return (
    <div className="header">
      <div className="header__left">
        <MenuIcon />
        <img
          className="header__logo"
          src="https://upload.wikimedia.org/wikipedia/commons/e/e1/Logo_of_YouTube_%282015-2017%29.svg"
          alt="YouTube_Logo"
        />
      </div>

      <div className="header__input">
        <input type="text" placeholder="Search" id="" />
        <SearchIcon className="header__inputButton" />
      </div>

      <div className="header__icons">
        <VideoCallIcon className="header__icon" />
        <AppsIcon className="header__icon" />
        <NotificationsIcon className="header__icon" />
        <Avatar
          src="https://img.freepik.com/free-photo/medium-shot-happy-man-smiling_23-2148221808.jpg?size=626&ext=jpg&uid=R26831018&ga=GA1.2.2135388873.1615631640"
          alt="Sonny Sangha"
        />
      </div>
    </div>
  );
};

export default Header;
