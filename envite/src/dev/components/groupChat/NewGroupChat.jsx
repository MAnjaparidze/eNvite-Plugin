import React, { Component } from 'react'
import "../../../css/groupChat/GroupChatCSS.css"
import CloseButton from '../parts/CloseButton';
import BurgerMenuIcon from '../../../assets/group2Copy2.png';
import SettingsIcon from '../../../assets/nounSetting1050013000000.png';
import SendIcon from '../../../assets/pathCopy.png';

export default class NewGroupChat extends Component {
    render() {
        return (
            <div className="groupChat__container">
                <CloseButton />
                <div className="groupChat__topSection">
                    <button className="groupChat__menu"><img src={BurgerMenuIcon} /></button>
                    <span className="groupChat__title">New Group</span>
                    <button className="groupChat__settings"><img src={SettingsIcon} alt="" /></button>
                </div>
                <div className="newGroupChat__midSection">
                    <span className="groupChat__header">eNvite Your Friends</span>
                    <span className="groupChat__description">where's the best way to call your</span>
                    <span className="groupChat__description">friends in?</span>
                    <div className="groupChat__socialNetwork__container">
                        <div className="groupChat__socialNetwork__wrapper"><i className="fab fa-facebook-f facebook__logo"></i></div>
                        <div className="groupChat__socialNetwork__wrapper"><i class="fab fa-telegram-plane telegram__logo"></i></div>
                        <div className="groupChat__socialNetwork__wrapper"><i class="fab fa-whatsapp whatsApp__logo"></i></div>
                        <div className="groupChat__socialNetwork__wrapper"><i class="fas fa-envelope email__logo"></i></div>
                    </div>
                </div>
                <div className="groupChat__botSection">
                    <div className="message__input__field__container">
                        {/* <textarea className="message__input__field" cols="20" rows="1"></textarea> */}
                    </div>
                    <button className="send__btn"><img src={SendIcon} /></button>
                </div>
            </div>
        )
    }
}
