import React from 'react'
import DeleteIcon from '../../../../assets/nounDelete2025414000000.png';

export default function GroupSettingsBotSection() {
  return (
    <div className="groupChatSettings__botSection">
        <button className="groupChatSettings__deleteBtn__container">
            <div className="groupChatSettings__deleteBtn__icon">
                <img src={DeleteIcon} alt="" />
            </div>
            <span className="groupChatSettings__deleteBtn__text">Delete Group</span>
        </button>
    </div>
  )
}
