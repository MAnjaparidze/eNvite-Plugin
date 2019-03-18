import React, { Component } from 'react'
import BurgerMenuIcon from '../../../../assets/group2Copy2.png';
import SettingsIcon from '../../../../assets/nounSetting1050013000000.png';



export default class GroupChatTopSection extends Component {
  render() {
    return (
      <div className="groupChat__topSection__wrapper">
        <button className="groupChat__menu"><img src={BurgerMenuIcon} onClick={this.props.goToProfile} /></button>
        <span className="groupChat__title">It's all about the bag</span>
        <button className="groupChat__settings"><img src={SettingsIcon} onClick={this.props.groupSettings} alt="" /></button>
      </div>
    )
  }
}

