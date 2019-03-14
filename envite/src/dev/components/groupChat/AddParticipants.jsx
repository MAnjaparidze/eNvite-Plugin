import React from 'react';
import '../../../css/groupChat/AddParticipantsCSS.css';
import GroupMember from './GroupMember';

import CloseButton from '../parts/CloseButton';
import BurgerMenuIcon from '../../../assets/group2Copy2.png';
import CloseIcon from '../../../assets/nounClose2043081000000Copy.png';
import DeleteIcon from '../../../assets/nounDelete2025414000000.png';
import AddIcon from '../../../assets/group3.png';

export default function AddParticipants() {
    return (
        <div className="addParticipants__container">
            <CloseButton />
            <div className="groupChat__topSection addParticipants__topSection">

                <span className="groupChat__title addParticipants__title">eNvite Your Friends</span>
                <button className="groupChatSettings__close addParticipantsSettings__close"><i className="fas fa-chevron-right groupChatSettings__close__icon"></i></button>
            </div>
            <div className="addParticipantsSettings__midSection">
                <div className="addParticipants__socialNetwork__wrapper">
                    <div className="addParticipants__socialNetwork"><i className="fab fa-facebook-f facebook__logo"></i></div>
                    <span className="addParticipants__socialNetwork__name">Facebook</span>
                    <i className="fas fa-chevron-right addParticipants__socialNetwork__goTo"></i>
                </div>
                <div className="addParticipants__socialNetwork__wrapper">
                    <div className="addParticipants__socialNetwork"><i class="fab fa-telegram-plane telegram__logo"></i></div>
                    <span className="addParticipants__socialNetwork__name">Telegram</span>
                    <i className="fas fa-chevron-right addParticipants__socialNetwork__goTo"></i>
                </div>
                <div className="addParticipants__socialNetwork__wrapper">
                    <div className="addParticipants__socialNetwork"><i class="fab fa-whatsapp whatsApp__logo"></i></div>
                    <span className="addParticipants__socialNetwork__name">WhatsApp</span>
                    <i className="fas fa-chevron-right addParticipants__socialNetwork__goTo"></i>
                </div>
                <div className="addParticipants__socialNetwork__wrapper">
                    <div className="addParticipants__socialNetwork"><i class="fas fa-envelope email__logo"></i></div>
                    <span className="addParticipants__socialNetwork__name">Email</span>
                    <i className="fas fa-chevron-right addParticipants__socialNetwork__goTo"></i>
                </div>
            </div>
        </div>
    )
}
