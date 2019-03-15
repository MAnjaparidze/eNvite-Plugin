import React, { Component } from 'react';
import '../../../css/general/PluginWindowCSS.css';
import UserProfile from '../user/UserProfile';
import SignIn from './SignIn';
import NewGroupChat from '../groupChat/NewGroupChat';
import GroupChat from '../groupChat/GroupChat';
import GroupSettings from '../groupChat/GroupSettings';
import AddParticipants from '../groupChat/AddParticipants';
import UserBag from '../groupChat/UserBag';

export default class PluginWindow extends Component {
  render() {
    return (
      <div className="pluginWindow--wrapper">
        {/* <SignIn /> */}
        {/* <UserProfile /> */}
        {/* <NewGroupChat /> */}
        {/* <GroupChat /> */}
        {/* <GroupSettings /> */}
        {/* <AddParticipants /> */}
        <UserBag />
      </div>
    )
  }
}
