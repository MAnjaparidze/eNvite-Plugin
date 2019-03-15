import React, { Component } from 'react';
import "../../../css/groupChat/GroupChatCSS.css";
import '../../../css/groupChat/GroupSettingsCSS.css';
import GroupMember from './GroupMember';

import CloseButton from '../items/CloseButton';
import BurgerMenuIcon from '../../../assets/group2Copy2.png';
import CloseIcon from '../../../assets/nounClose2043081000000Copy.png';
import DeleteIcon from '../../../assets/nounDelete2025414000000.png';
import AddIcon from '../../../assets/group3.png';

export default class GroupChat extends Component {
    render() {
        return (
            <div className="groupChat__container">
                <CloseButton />
                <div className="groupChat__topSection">
                    <button className="groupChat__menu"><img src={BurgerMenuIcon} /></button>
                    <span className="groupChat__title">Group Info</span>
                    <button className="groupChatSettings__close"><img className="groupChatSettings__close__icon" src={CloseIcon} alt="" /></button>
                </div>
                <div className="groupChatSettings__midSection">
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
                            <GroupMember />
                            <GroupMember />
                            <GroupMember />
                        </div>

                        <button className="groupChatSettings__addMemberBtn__container">
                            <div className="groupChatSettings__addMemberBtn__icon">
                                <img src={AddIcon} alt="" />
                            </div>
                            <span className="groupChatSettings__addMemberBtn__text">Add Participants</span>
                        </button>

                    </div>

                </div>
                <div className="groupChatSettings__botSection">
                    <button className="groupChatSettings__deleteBtn__container">
                        <div className="groupChatSettings__deleteBtn__icon">
                            <img src={DeleteIcon} alt="" />
                        </div>
                        <span className="groupChatSettings__deleteBtn__text">Delete Group</span>
                    </button>
                </div>
            </div>
        )
    }
}
