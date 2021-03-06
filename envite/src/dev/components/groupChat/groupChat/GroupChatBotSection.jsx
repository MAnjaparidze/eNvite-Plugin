import React from 'react'
import SendIcon from '../../../../assets/pathCopy.png';

export default function GroupChatBotSection() {
  return (
    <div className="groupChat__botSection">
      <div className="message__input__field__container">
        <input className="message__input__field" type="text" />
      </div>
      <button className="send__btn"><img className="send__btn__icon" src={SendIcon} /></button>
    </div>
  )
}
