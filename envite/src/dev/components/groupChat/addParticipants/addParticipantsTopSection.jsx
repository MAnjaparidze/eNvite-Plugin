import React, { Component } from 'react'

export default class addParticipantsTopSection extends Component {
  render() {
    return (
      <div className="groupChat__topSection__wrapper">
        <span className="groupChat__title addParticipants__title">eNvite Your Friends</span>
        <button className="addParticipantsSettings__close " onClick={this.props.toGroup}><i className="fas fa-chevron-right groupChatSettings__close__icon"></i></button>
      </div>
    )
  }
}
