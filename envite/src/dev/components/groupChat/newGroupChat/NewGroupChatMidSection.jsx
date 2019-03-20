import React from 'react'

export default function newGroupChatMidSection() {
  return (
    <div className="groupChat__midSection__wrapper newGroupChat__midSection">
        <span className="groupChat__header">eNvite Your Friends</span>
        <span className="groupChat__description">where's the best way to call your</span>
        <span className="groupChat__description">friends in?</span>
        <div className="groupChat__socialNetwork__container">
            <div className="groupChat__socialNetwork__wrapper"><i className="fab fa-facebook-f facebook__logo"></i></div>
            <div className="groupChat__socialNetwork__wrapper"><i className="fab fa-telegram-plane telegram__logo"></i></div>
        <div className="groupChat__socialNetwork__wrapper"><i className="fab fa-whatsapp whatsApp__logo"></i></div>
        <div className="groupChat__socialNetwork__wrapper"><i className="fas fa-envelope email__logo"></i></div>
        </div>
    </div>
  )
}
