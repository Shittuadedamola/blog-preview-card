import React from 'react'
import avatar from "../assets/image-avatar.webp"

const Avatar = () => {
  return (
    <div className='avatarCon'>
        <img src={avatar} alt="" />
        <span className='avatarSpan'>Greg Hooper</span>
    </div>
  )
}

export default Avatar