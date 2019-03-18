import React, { Component } from 'react'
import GroupMember from '../GroupMember';
import AddIcon from '../../../../assets/group3.png';



export default class GroupSettingsMidSection extends Component {
    render() {
        return (
            <div className="groupChatSettings__midSection__wrapper">
                <div className="groupChatSettings__midSection__firstDiv">
                    <div className="groupChatSettings__midSection__firstDiv__icon">
                        <span>S</span>
                    </div>
                    <span className="groupChatSettings__midSection__firstDiv__text">
                        It's all about the bag
                    </span>
                    <i className="fas fa-chevron-right groupChatSettings__midSection__goTo__icon"></i>
                </div>

                <div className="groupChatSettings__membersCount">3 Participants</div>
                <div className="groupChatSettings__membersList__container">
                    <div className="groupChatSettings__membersList">
                        <GroupMember groupMemberBag={this.props.groupMemberBag} />
                        <GroupMember />
                        <GroupMember />
                    </div>

                    <button className="groupChatSettings__addMemberBtn__container" onClick={this.props.addMember}>
                        <button className="groupChatSettings__addMemberBtn__icon" >
                            <img src={AddIcon} alt="" />
                        </button>
                        <span className="groupChatSettings__addMemberBtn__text">Add Participants</span>
                    </button>

                </div>

            </div>
        )
    }
}
