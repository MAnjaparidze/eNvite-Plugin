import React from 'react';
import '../../css/GroupItemCSS.css';

export default function GroupItem() {
    return (
        <div className="groupTab--wrapper">
            <div className="group__icon"><span className="groupLetter">a</span></div>
            <div className="groupInfo">
                <span className="group__title">Asos Team</span>
                <span className="groupMembersList">Nina, Emma, Milla, Eimy.</span>
            </div>
        </div>
    )
}
