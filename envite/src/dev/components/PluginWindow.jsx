import React, { Component } from 'react';
import '../../css/PluginWindowCSS.css';
import UserProfile from './UserProfile';
import SignIn from './SignIn';
import NewGroup from './NewGroup';
import Group from './Group';

export default class PluginWindow extends Component {
  render() {
    return (
      <div className="pluginWindow--wrapper">
        {/* <SignIn /> */}
        <UserProfile />
        {/* <NewGroup /> */}
        {/* <Group /> */}
      </div>
    )
  }
}
