import React from 'react'
import UserFriendMessage from '../../messages/UserFriendMessage';
import UserMessage from '../../messages/UserMessage';

export default function GroupChatMidSection() {
  return (
    <div className="groupChat__midSection__wrapper">
        <UserFriendMessage />
        <UserMessage />
    </div>
  )
}
