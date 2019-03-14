import React, { Component } from 'react';
import "../../../css/groupChat/GroupChatCSS.css";
import '../../../css/groupChat/GroupSettingsCSS.css';

import CloseButton from '../parts/CloseButton';
import BurgerMenuIcon from '../../../assets/group2Copy2.png';
import CloseIcon from '../../../assets/nounClose2043081000000Copy.png';
import DeleteIcon from '../../../assets/nounDelete2025414000000.png';

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
                    <div></div>
                    <h2></h2>
                    <div>
                        <div>
                            <div></div>
                            <div></div>
                            <div></div>
                        </div>
                        <div></div>
                    </div>

                </div>
                <div className="groupChatSettings__botSection">
                    <button className="groupChatSettings__deleteBtn__container">
                        <div className="groupChatSettings__deleteBtn__icon">
                            <img src={DeleteIcon} alt="" />
                        </div>
                        <span className="groupChatSettings__deleteBrn__text">Delete Group</span>
                    </button>
                </div>
            </div>
        )
    }
}
