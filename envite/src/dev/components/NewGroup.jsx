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
                    <span className="group__title">New Group</span>
                    <button className="group__settings"><img src={SettingsIcon} alt="" /></button>
                </div>
                <div className="group__midSection">
                    <span className="group__header">eNvite Your Friends</span>
                    <span className="group__description">where's the best way to call your</span>
                    <span className="group__description">friends in?</span>
                    <div className="group__socialNetwork__container">
                        <div className="group__socialNetwork__wrapper"><i className="fab fa-facebook-f facebook__logo"></i></div>
                        <div className="group__socialNetwork__wrapper"><i class="fab fa-telegram-plane telegram__logo"></i></div>
                        <div className="group__socialNetwork__wrapper"><i class="fab fa-whatsapp whatsApp__logo"></i></div>
                        <div className="group__socialNetwork__wrapper"><i class="fas fa-envelope email__logo"></i></div>
                    </div>
                </div>
                <div className="group__botSection">
                    <div className="message__input__field__container">
                        {/* <textarea className="message__input__field" cols="20" rows="1"></textarea> */}
                    </div>
                    <button className="send__btn"><img src={SendIcon} /></button>
                </div>
            </div>
        )
    }
}
