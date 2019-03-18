import React, { Component } from 'react';

import './css/general/ENviteIconCSS.css'
import './css/general/SignInCSS.css'
import './css/groupChat/AddParticipantsCSS.css'
import './css/groupChat/GroupChatCSS.css'
import './css/groupChat/GroupItemCSS.css'
import './css/groupChat/GroupMemberCSS.css'
import './css/groupChat/GroupSettingsCSS.css'
import './css/messages/UserFriendMessageCSS.css'
import './css/messages/UserMessageCSS.css'
import './css/parts/BurgerCloseButtonCSS.css'
import './css/user/UserProfileCSS.css'
import './App.css';
import './css/groupChat/UserBagCSS.css'
import './css/user/UserSettingsCSS.css'

import EnviteIcon from './dev/components/general/ENviteIcon';
import UserProfile from './dev/components/user/UserProfile';
import UserUtilities from './dev/components/general/UserUtilities';
import GroupContainer from './dev/components/groupChat/GroupRootComponent';
import UserSettings from './dev/components/user/UserSettings';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isExpanded: false,
      showProfile: false,
      isGroupChat: false,
      isUserProfile: false,
      isSettingsClicked: false,
      addGroup: false,
      groupSelected: false,
      groupSettings: false,
      groupMemberBag: false,
      addMembers: false,
    }
  }

  changeInitialView() {
    if (this.state.isGroupChat) {
      return <GroupContainer
                toggleWindow={this.handleToggle}
                state={this.state}
                isExpanded={this.state.isExpanded}
                groupSettings={this.goToGroupSettings}
                goToProfile={this.goToProfile}    
                toGroup={this.goToGroup}
                groupMemberBag={this.goToGroupMemberBag}
                addMember={this.addMember}
             />      
    }
    else {
      return <UserUtilities
              toggleWindow={this.handleToggle}
              state={this.state}
              isExpanded={this.state.isExpanded}
              addGroup={this.goToAddGroup}
              signIn={this.signIn}
              goToProfile={this.goToProfile}
              goToSettings={this.goToSettings}
              goToGroup={this.goToGroup}
            />
    }
  }

  goToAddGroup = () => {
    this.setState({
      isUserProfile: false,
      isGroupChat: true,
      addGroup: true,
      groupSelected: false,
      groupSettings: false,
      groupMemberBag: false,
      addMember: false
    })
  }

  addMember = () => {
    this.setState({
      isUserProfile: false,
      isGroupChat: true,
      addGroup: false,
      groupSelected: false,
      groupSettings: false,
      groupMemberBag: false,
      addMember: true
    })
  }
  goToGroup = () => {
    this.setState({
      isUserProfile: false,
      isGroupChat: true,
      addGroup: false,
      groupSelected: true,
      groupSettings: false,
      groupMemberBag: false,
      addMember: false
    })
  }

  goToGroupSettings = () => {
    this.setState({
      addGroup: false,
      groupSelected: false,
      groupSettings: true,
      groupMemberBag: false,
      addMember: false
    })
  }

  goToGroupMemberBag = () => {
    this.setState({
      addGroup: false,
      groupSelected: false,
      groupSettings: false,
      groupMemberBag: true,
      addMember: false
    })
  }

  handleToggle = () => {
    this.setState({
      isExpanded: !this.state.isExpanded
    })
  }

  signIn = () => {
    this.setState({
      isGroupChat: false,
      showProfile: true,
    })
  }

  goToSettings = () => {
    this.setState({
      showProfile: false,
      isSettingsClicked: true,
    })
  }

  goToProfile = () => {
    this.setState({
      isSettingsClicked: false,
      showProfile: true,
      isGroupChat: false,
      addGroup: false,
      groupSelected: false,
      groupSettings: false,
      addMember: false
    })
  }



  render() {
    return (
      <div className="App">

        <div className="plugin__wrapper">

          <EnviteIcon toggleWindow={this.handleToggle} />

          {this.changeInitialView()}
        </div>


      </div>
    );
  }
}

export default App;