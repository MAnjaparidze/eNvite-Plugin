import React, { Component } from 'react'

export default class GroupMember extends Component {
  render() {
    return (
        <div className="groupMember__container" onClick={this.props.groupMemberBag}>

            <img className="groupChatSettings__member__icon" src="https://randomuser.me/api/portraits/women/56.jpg">

            </img>
            <span className="groupChatSettings__member__text">User Friend Name</span>
            <div className="groupChatSettings__member__text--right">

                <span className="groupChatSettings__admin__text">Admin</span>
                <i className="fas fa-chevron-right "></i>
            </div>
        </div>
    )
  }
}
