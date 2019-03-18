import React from 'react'
import BagItem from './BagItemGenerator'

export default function groupMemberBagMidSection() {
  return (
      <div className="userBag__midSection__wrapper">
          <BagItem />
          <BagItem />
          <BagItem />
      </div>
  )
}
