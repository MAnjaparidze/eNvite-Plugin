import React from 'react';
import '../../../css/messages/UserFriendMessageCSS.css';

export default function UserFriendMessage() {
    return (
        <div className="userFriendMessage__container__wrapper">

            <div className="userFriendMessage__container">
                <div className="userFriendMessage__content__container">
                    <span className="userFriendMessage__friendName">Lora Line</span>
                    <span className="userFriendMessage__textField">joined to Asos Team</span>
                </div>
                <div className="userFriendMessage__userImg__wrapper">
                    <img className="userFriendMessage__userImg" src="https://randomuser.me/api/portraits/women/56.jpg" alt="" />
                </div>
            </div>
        </div>
    )
}
