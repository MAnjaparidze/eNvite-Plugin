import React from 'react';
import '../../../css/groupChat/GroupMemberCSS.css';

export default function GroupMember() {
    return (
        <div className="groupMember__container">

            <img className="groupChatSettings__member__icon" src="https://randomuser.me/api/portraits/women/56.jpg">

            </img>
            <span className="groupChatSettings__member__text">User Friend Name</span>
            <div className="groupChatSettings__member__text--right">

                <span className="groupChatSettings__admin__text">Admin</span>
                <i className="fas fa-chevron-right "></i>
            </div>
        </div>
    )
}
