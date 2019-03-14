import React from 'react';
import '../../../css/messages/UserMessageCSS.css';

export default function UserMessage() {
    return (
        <div className="userMessage__container__wrapper">

            <div className="userMessage__container">
                <div className="userMessage__userImg__wrapper">
                    
                    <img className="userMessage__userImg" src="https://randomuser.me/api/portraits/women/49.jpg" alt="" />
                    
                </div>
                <span className="userMessage__textField">
                    Hi dear, good you came!!!
                </span>
            </div>
        </div>
    )
}
