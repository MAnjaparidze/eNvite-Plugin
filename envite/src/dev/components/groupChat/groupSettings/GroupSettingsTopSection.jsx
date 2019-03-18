import React, { Component } from 'react'
import BurgerMenuIcon from '../../../../assets/group2Copy2.png';
import CloseIcon from '../../../../assets/nounClose2043081000000Copy.png';


export default class GroupSettingsTopSection extends Component {
  render() {
    return (
      <div className="groupChat__topSection__wrapper">
        <button className="groupChat__menu"><img src={BurgerMenuIcon} onClick={this.props.goToProfile} /></button>
        <span className="groupChat__title">Group Info</span>
        <button className="groupChatSettings__close"><img className="groupChatSettings__close__icon" src={CloseIcon} alt="" onClick={this.props.toGroup} /></button>
      </div>
    )
  }
}

