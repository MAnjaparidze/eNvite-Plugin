import React, { Component } from 'react';
import {
  BrowserView,
  MobileView,
  isBrowser,
  isMobile
} from "react-device-detect";

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
import './css/general/ResponsiveCSS.css'

import EnviteIcon from './dev/components/general/ENviteIcon';
import UserProfile from './dev/components/user/UserProfile';
import UserUtilities from './dev/components/general/UserUtilities';
import GroupContainer from './dev/components/groupChat/GroupRootComponent';
import UserSettings from './dev/components/user/UserSettings';



class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      messageCount: null,
      isMessage: false,
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

  changeMessageCount = () => {
    let messageCount = document.getElementsByClassName('groupChat__midSection__wrapper')[0];
    console.log(messageCount);
  }

  renderContent = () => {
    if (isMobile) {
      return (
        <div className="eNviteIcon__container">
          <span className="eNviteIcon__moto">Shop With Friends</span>
          <EnviteIcon toggleWindow={this.handleToggle} changeInitialView={this.changeInitialView} />
        </div>

      )
    }
    else {
      return <div></div>
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
        checkMessages={this.changeMessageCount}
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

  animationSignInAppear = () => {
    let animationComponent = document.getElementById('signIn__component');
    animationComponent.style.opacity = 1;
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
    }, 100);
    setTimeout(() => {
      this.animationGroupAppear();
    }, 150);
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
    }, 100)
    setTimeout(() => {
      this.animationGroupAppear();
    }, 150)
  }

  goToGroup = () => {
    if (this.state.isUserProfile == false && this.state.isGroupChat == true) {
      this.animationGroupDisappear();
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
      }, 100)
      setTimeout(() => {
        this.animationGroupAppear();
      }, 150)
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
      }, 100);
      setTimeout(() => {
        this.animationGroupAppear();
      }, 150);
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
    }, 100)
    setTimeout(() => {
      this.animationGroupAppear();
    }, 150)
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
    }, 100)
    setTimeout(() => {
      this.animationGroupAppear();
    }, 150)
  }

  handleToggle = () => {
    if (this.state.isUserProfile == false && this.state.isGroupChat == true) {
      this.setState({
        isExpanded: !this.state.isExpanded
      })
      this.changeMessageCount();
    } else {
      setTimeout(() => {
        this.setState({
          isExpanded: !this.state.isExpanded
        })
      }, 100);

      setTimeout(() => {
        this.disableScroll();
      }, 150);
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
    }, 100);
    setTimeout(() => {
      this.animationUserUtilAppear();
    }, 150);
  }

  goToSettings = () => {
    this.animationUserUtilDisappear();

    setTimeout(() => {
      this.setState({
        showProfile: false,
        isSettingsClicked: true,
      })
    }, 100)
    setTimeout(() => {
      this.animationUserUtilAppear();
    }, 150)
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
      }, 100);
      setTimeout(() => {
        this.animationUserUtilAppear();
      }, 150);
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
      }, 100);
      setTimeout(() => {
        this.animationUserUtilAppear();
      }, 150);
    }
  }

  disableScroll = () => {
    let appBody = document.body;
    let appHTML = document.documentElement;
    appBody.classList.add("scrollDisabled");
    appHTML.classList.add("scrollDisabled");
    if (this.state.isExpanded == false) {
      appBody.classList.remove("scrollDisabled");
      appHTML.classList.remove("scrollDisabled");
    }
  }

  render() {
    return (
      <div className="App" id="app">

        <div className="plugin__wrapper">

          {this.renderContent()}
          {this.changeInitialView()}
        </div>


      </div>
    );
  }
}

export default App;