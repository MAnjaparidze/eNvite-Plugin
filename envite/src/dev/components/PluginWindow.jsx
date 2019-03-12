import React, { Component } from 'react';
import '../../css/PluginWindowCSS.css';
import SignIn from './SignIn';
import UserProfile from './UserProfile';

export default class PluginWindow extends Component {
  render() {
    return (
      <div className="pluginWindow--wrapper">
        {/* <SignIn /> */}
        <UserProfile />
      </div>
    )
  }
}
