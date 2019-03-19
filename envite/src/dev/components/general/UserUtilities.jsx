import React, { Component } from 'react';

import SignInComponent from './SignInComponent';
import UserProfile from '../user/UserProfile';
import UserSettings from '../user/UserSettings';

export default class SignIn extends Component {
  renderUserUtilities() {
    if (this.props.state.showProfile) {
      return <UserProfile 
                display={this.props.state} 
                goToSettings={this.props.goToSettings} 
                addGroup={this.props.addGroup} 
                goToGroup={this.props.goToGroup}
              />
    }
    if (this.props.state.isSettingsClicked) {
      return <UserSettings goToProfile={this.props.goToProfile} toggleWindow={this.props.toggleWindow} isExpanded={this.props.isExpanded} />
    }
    else {
      return <SignInComponent isExpanded={this.props.isExpanded} signIn={this.props.signIn} />
    }
  }
  render() {
    let toggle = 'signIn--wrapper' + (this.props.isExpanded ? ' isActive' : '');
    return (
      <div className={toggle} id="userUtilities__component">
        <div className="close__button" onClick={this.props.toggleWindow}></div>
        {this.renderUserUtilities()}
      </div>
    )
  }
}
