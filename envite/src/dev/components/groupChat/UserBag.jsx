import React from 'react';
import '../../../css/groupChat/UserBagCSS.css';
import BagItem from '../items/BagItem';

import CloseButton from '../items/CloseButton';

export default function AddParticipants() {
    return (
        <div className="addParticipants__container">
            <CloseButton />
            <div className="userBag__topSection">
                <img className="groupChatSettings__member__icon userBag__userImg" src="https://randomuser.me/api/portraits/women/56.jpg" />
                <div className="userBag__userInfo">
                    <span className="userBag__userName">Emma' Green</span>
                    <span className="userBag__description">Shopping Bag</span>
                </div>
               
            </div>
            <div className="userBag__midSection">
                <BagItem />
                <BagItem />
                <BagItem />
            </div>
        </div>
    )
}
