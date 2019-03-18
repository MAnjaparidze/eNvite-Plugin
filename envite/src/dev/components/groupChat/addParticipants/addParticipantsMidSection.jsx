import React from 'react'

export default function addParticipantsMidSection() {
  return (
      <div className="addParticipantsSettings__midSection__wrapper">
          <div className="addParticipants__socialNetwork__wrapper">
              <div className="addParticipants__socialNetwork">
                  <i className="fab fa-facebook-f settings__facebook__logo addParticipants__logo logo__border"></i>
                  <span className="addParticipants__socialNetwork__name">Facebook</span>
              </div>
              <i className="fas fa-chevron-right addParticipants__socialNetwork__goTo"></i>
          </div>
          <div className="addParticipants__socialNetwork__wrapper">
              <div className="addParticipants__socialNetwork">
                  <i class="fab fa-telegram-plane settings__telegram__logo addParticipants__logo logo__border"></i>
                  <span className="addParticipants__socialNetwork__name">Telegram</span>
              </div>
              <i className="fas fa-chevron-right addParticipants__socialNetwork__goTo"></i>
          </div>
          <div className="addParticipants__socialNetwork__wrapper">
              <div className="addParticipants__socialNetwork">
                  <i class="fab fa-whatsapp settings__whatsApp__logo addParticipants__logo logo__border"></i>
                  <span className="addParticipants__socialNetwork__name">WhatsApp</span>
              </div>
              <i className="fas fa-chevron-right addParticipants__socialNetwork__goTo"></i>
          </div>
          <div className="addParticipants__socialNetwork__wrapper">
              <div className="addParticipants__socialNetwork">
                  <i class="fas fa-envelope settings__email__logo addParticipants__logo logo__border"></i>

                  <span className="addParticipants__socialNetwork__name">Email</span>
              </div>
              <i className="fas fa-chevron-right addParticipants__socialNetwork__goTo"></i>
          </div>
      </div>
  )
}
