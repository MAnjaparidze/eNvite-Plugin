import React, { Component } from 'react';
import '../../css/SignInCSS.css';
import EnviteIcon from '../../assets/eNviteIcon.png';
import FBIcon from '../../assets/facebookIcon.png';
import GIcon from '../../assets/googleIcon.png'

export default class SignIn extends Component {
  render() {
    return (
      <div className="signIn--wrapper">
        <div className="close__button"></div>
        <div className="signIn__body">
          <img src={EnviteIcon} className="brandLogo"></img>
          <h1 className="welcome">Hello.</h1>
          <span>To start the Online Mall mood with your</span>
          <span>friends you must be connected.</span>
          <div className="loginField">
            <div className="fbLogin">
              <img src={FBIcon} className="facebookIcon" />
            </div>
            <div className="gLogin">
              <img src={GIcon} className="googleIcon" />
            </div>
          </div>
          <div className="signIn__footer">
            Powered by <span className="brandName">eNvite</span>
          </div>
        </div>
      </div>
    )
  }
}
