import React, { Component } from 'react'
import EnviteIcon from '../../../assets/eNviteIcon.png';
import FBIcon from '../../../assets/facebookIcon.png';
import GIcon from '../../../assets/googleIcon.png'


export default class SignInComponent extends Component {
  render() {
    return (
        <div className="signIn__body" id='signIn__component'>
            <img src={EnviteIcon} className="signIn__brandLogo"></img>
            <h1 className="signIn__welcome">Hello.</h1>
            <span className="signIn__description">To start the Online Mall mood with your</span>
            <span className="signIn__description">friends you must be connected.</span>
            <div className="loginField">
                <div className="fbLogin" onClick={this.props.signIn}>
                    <img src={FBIcon} className="facebookIcon" />
                </div>
                <div className="gLogin" onClick={this.props.signIn}>
                    <img src={GIcon} className="googleIcon" />
                </div>
            </div>
            <div className="signIn__footer">
                Powered by <span className="signIn__brandName">eNvite</span>
            </div>
        </div>
    )
  }
}
