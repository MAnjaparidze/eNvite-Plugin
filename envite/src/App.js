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

  animationGroupDisappear = () => {
    let componentToAnimate = document.getElementById('groupChat__component');

    componentToAnimate.style.opacity = 0;
  }
  animationGroupAppear = () => {
    let componentToAnimate = document.getElementById('groupChat__component');

    componentToAnimate.style.opacity = 1;
  }
  animationUserUtilDisappear = () => {
    let componentUtilAnimate = document.getElementById('userUtilities__component');

    componentUtilAnimate.style.opacity = 0;
  }
  animationUserUtilAppear = () => {
    let componentUtilAnimate = document.getElementById('userUtilities__component');

    componentUtilAnimate.style.opacity = 1;
  }
  resetUtilAnimation() {
    let utilAnimation = document.getElementById('')
  }

  goToAddGroup = () => {
    this.animationUserUtilDisappear();
    setTimeout(() => {
      this.setState({
        isUserProfile: false,
        isGroupChat: true,
        addGroup: true,
        groupSelected: false,
        groupSettings: false,
        groupMemberBag: false,
        addMember: false
      })
    }, 500);
    setTimeout(() => {
      this.animationGroupAppear();
    }, 800);
  }

  addMember = () => {
    this.animationGroupDisappear();
    setTimeout(() => {
      this.setState({
        isUserProfile: false,
        isGroupChat: true,
        addGroup: false,
        groupSelected: false,
        groupSettings: false,
        groupMemberBag: false,
        addMember: true
      })
    }, 500)
    setTimeout(() => {
      this.animationGroupAppear();
    }, 500)
  }

  goToGroup = () => {
    if (this.state.isUserProfile == false && this.state.isGroupChat == true) {
      this.animationGroupDisappear();
      alert('Thsi works')
      setTimeout(() => {
        this.setState({
          isUserProfile: false,
          isGroupChat: true,
          addGroup: false,
          groupSelected: true,
          groupSettings: false,
          groupMemberBag: false,
          addMember: false
        })
      }, 500)
      setTimeout(() => {
        this.animationGroupAppear();
      }, 500)
    } else {
      this.animationUserUtilDisappear();
      setTimeout(() => {
        this.setState({
          isUserProfile: false,
          isGroupChat: true,
          addGroup: false,
          groupSelected: true,
          groupSettings: false,
          groupMemberBag: false,
          addMember: false
        })
      }, 500);
      setTimeout(() => {
        this.animationGroupAppear();
      }, 500);
    }
  }

  goToGroupSettings = () => {
    this.animationGroupDisappear();
    setTimeout(() => {
      this.setState({
        addGroup: false,
        groupSelected: false,
        groupSettings: true,
        groupMemberBag: false,
        addMember: false
      })
    }, 500)
    setTimeout(() => {
      this.animationGroupAppear();
    }, 500)
  }

  goToGroupMemberBag = () => {
    this.animationGroupDisappear();
    setTimeout(() => {

      this.setState({
        addGroup: false,
        groupSelected: false,
        groupSettings: false,
        groupMemberBag: true,
        addMember: false
      })
    }, 500)
    setTimeout(() => {
      this.animationGroupAppear();
    }, 500)
  }

  handleToggle = () => {
    if (this.state.isUserProfile == false && this.state.isGroupChat == true) {
      this.setState({
        isExpanded: !this.state.isExpanded
      })
    } else {
      this.setState({
        isExpanded: !this.state.isExpanded
      })

      this.animationUserUtilAppear();
    }
  }

  signIn = () => {
    this.animationUserUtilDisappear();
    setTimeout(() => {
      this.setState({
        isGroupChat: false,
        showProfile: true,
      })
    }, 500);
    setTimeout(() => {
      this.animationUserUtilAppear();
    }, 500);
  }

  goToSettings = () => {
    this.animationUserUtilDisappear();
    setTimeout(() => {
      this.setState({
        showProfile: false,
        isSettingsClicked: true,
      })
    }, 500)
    setTimeout(() => {
      this.animationUserUtilAppear();
    }, 500)
  }

  goToProfile = () => {
    if (this.state.isUserProfile == false && this.state.isGroupChat == true) {
      this.animationGroupDisappear();
      setTimeout(() => {
        this.setState({
          isSettingsClicked: false,
          showProfile: true,
          isGroupChat: false,
          addGroup: false,
          groupSelected: false,
          groupSettings: false,
          addMember: false
        })
      }, 500);
      setTimeout(() => {
        this.animationUserUtilAppear();
      }, 500);
    } else {
      this.animationUserUtilDisappear();
      setTimeout(() => {
        this.setState({
          isSettingsClicked: false,
          showProfile: true,
          isGroupChat: false,
          addGroup: false,
          groupSelected: false,
          groupSettings: false,
          addMember: false
        })
      }, 500);
      setTimeout(() => {
        this.animationUserUtilAppear();
      }, 500);
    }
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