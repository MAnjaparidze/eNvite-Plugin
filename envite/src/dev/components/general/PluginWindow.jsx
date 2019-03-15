import React, { Component } from 'react';
import '../../../css/general/PluginWindowCSS.css';
import UserProfile from '../user/UserProfile';
import SignIn from './SignIn';
import NewGroupChat from '../groupChat/NewGroupChat';
import GroupChat from '../groupChat/GroupChat';
import GroupSettings from '../groupChat/GroupSettings';
import AddParticipants from '../groupChat/AddParticipants';
import UserBag from '../groupChat/UserBag';
import UserSettings from '../user/UserSettings';

export default class PluginWindow extends Component {

  
  render() {
    let toggle = 'pluginWindow--wrapper' + (this.props.isExpanded ? ' isActive' : '');
    return (
      <div className={toggle}> 
        <SignIn toggleWindow={this.props.toggleWindow}/>
        {/* <UserProfile /> */}
        {/* <NewGroupChat /> */}
        {/* <GroupChat /> */}
        {/* <GroupSettings /> */}
        {/* <AddParticipants /> */}
        {/* <UserBag /> */}
        {/* <UserSettings /> */}
      </div>
    )
  }
}
