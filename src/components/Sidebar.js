import React from 'react';
import './css/Sidebar.css';
import SidebarRow from './SidebarRow';
import HomeIcon from '@material-ui/icons/Home';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import HistoryIcon from '@material-ui/icons/History';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <SidebarRow Icon={HomeIcon} title="Home" />
      <SidebarRow Icon={WhatshotIcon} title="Trending" />
      <SidebarRow Icon={SubscriptionsIcon} title="Subscription" />
      <SidebarRow Icon={VideoLibraryIcon} title="Library" />
      <SidebarRow Icon={HistoryIcon} title="History" />
      {/*<SidebarRow icon={HomeIcon} title="Your Videos" />*/}
      {/*<SidebarRow icon={HomeIcon} title="Watch Later" />*/}
      {/*<SidebarRow icon={HomeIcon} title="Liked Videos" />*/}
    </div>
  );
};

export default Sidebar;
