import React, { Component } from 'react'
import BurgerMenuIcon from '../../../../assets/group2Copy2.png';
import SettingsIcon from '../../../../assets/nounSetting1050013000000.png';


export default class NewGroupChatTopSection extends Component {
  render() {
    return (
      <div className="groupChat__topSection__wrapper">
        <button className="groupChat__menu"><img src={BurgerMenuIcon} onClick={this.props.goToProfile} /></button>
        <span className="groupChat__title">New Group</span>
        <button className="groupChat__settings"><img src={SettingsIcon} alt="" /></button>
      </div>
    )
  }
}
