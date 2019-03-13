import React, { Component } from 'react'
import "../../css/GroupCSS.css"
import CloseButton from './CloseButton';
import BurgerMenuIcon from '../../assets/group2Copy2.png';
import SettingsIcon from '../../assets/nounSetting1050013000000.png';
import SendIcon from '../../assets/pathCopy.png';
import FacebookLogo from '../../assets/facebookIcon.png';
import WhatsAppLogo from '../../assets/whatsapp-logo.png';
import EmailLogo from '../../assets/email-logo.png';
import TelegramLogo from '../../assets/telegram-logo.png';

export default class Group extends Component {
    render() {
        return (
            <div className="group__container">
                <CloseButton />
                <div className="group__topSection">
                    <button className="group__menu"><img src={BurgerMenuIcon} /></button>
                    <span className="group__title">It's all about the bag</span>
                    <button className="group__settings"><img src={SettingsIcon} alt="" /></button>
                </div>
                <div className="group__midSection">
                    
                </div>
                <div className="group__botSection">
                    <div className="message__input__field__container">
                        {/* <textarea className="message__input__field" cols="20" rows="1"></textarea> */}
                    </div>
                    <button className="send__btn"><img className="send__btn__icon" src={SendIcon} /></button>
                </div>
            </div>
        )
    }
}
