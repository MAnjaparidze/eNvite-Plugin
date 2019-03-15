import React from 'react';
import '../../../css/groupChat/AddParticipantsCSS.css';

import CloseButton from '../items/CloseButton';

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
                    <div className="addParticipants__socialNetwork">
                        <i className="fab fa-facebook-f facebook__logo addParticipants__logo logo__border"></i>
                        <span className="addParticipants__socialNetwork__name">Facebook</span>
                    </div>
                    <i className="fas fa-chevron-right addParticipants__socialNetwork__goTo"></i>
                </div>
                <div className="addParticipants__socialNetwork__wrapper">
                    <div className="addParticipants__socialNetwork">
                        <i class="fab fa-telegram-plane telegram__logo addParticipants__logo logo__border"></i>
                        <span className="addParticipants__socialNetwork__name">Telegram</span>
                    </div>
                    <i className="fas fa-chevron-right addParticipants__socialNetwork__goTo"></i>
                </div>
                <div className="addParticipants__socialNetwork__wrapper">
                    <div className="addParticipants__socialNetwork">
                        <i class="fab fa-whatsapp whatsApp__logo addParticipants__logo logo__border"></i>
                        <span className="addParticipants__socialNetwork__name">WhatsApp</span>
                    </div>
                    <i className="fas fa-chevron-right addParticipants__socialNetwork__goTo"></i>
                </div>
                <div className="addParticipants__socialNetwork__wrapper">
                    <div className="addParticipants__socialNetwork">
                        <i class="fas fa-envelope email__logo addParticipants__logo logo__border"></i>

                        <span className="addParticipants__socialNetwork__name">Email</span>
                    </div>
                    <i className="fas fa-chevron-right addParticipants__socialNetwork__goTo"></i>
                </div>
            </div>
        </div>
    )
}
