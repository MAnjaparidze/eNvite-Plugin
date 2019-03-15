import React, { Component } from 'react';
import "../../../css/groupChat/GroupChatCSS.css";
import UserMessage from '../messages/UserMessage';
import UserFriendMessage from '../messages/UserFriendMessage';

import CloseButton from '../items/CloseButton';
import BurgerMenuIcon from '../../../assets/group2Copy2.png';
import SettingsIcon from '../../../assets/nounSetting1050013000000.png';
import SendIcon from '../../../assets/pathCopy.png';

export default class GroupChat extends Component {
    render() {
        return (
            <div className="groupChat__container">
                <CloseButton />
                <div className="groupChat__topSection">
                    <button className="groupChat__menu"><img src={BurgerMenuIcon} /></button>
                    <span className="groupChat__title">It's all about the bag</span>
                    <button className="groupChat__settings"><img src={SettingsIcon} alt="" /></button>
                </div>
                <div className="groupChat__midSection">
                    <UserFriendMessage />
                    <UserMessage />
                </div>
                <div className="groupChat__botSection">
                    <div className="message__input__field__container">
                        {/* <textarea className="message__input__field" cols="20" rows="1"></textarea> */}
                    </div>
                    <button className="send__btn"><img className="send__btn__icon" src={SendIcon} /></button>
                </div>
            </div>
        )
    }
}
