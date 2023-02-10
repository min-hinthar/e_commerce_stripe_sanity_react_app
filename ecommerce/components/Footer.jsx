import React from 'react';
import { AiFillInstagram, AiOutlineTwitter, AiFillFacebook } from 'react-icons/ai'

const Footer = () => {
  return (
    <div className='footer-container'>
      <p>
        ©️ 2023 Mandalay Star Gemstones | All Rights Reserved
      </p>
      <p className='icons'>
        <AiFillInstagram  className='instagram'/>
        <AiOutlineTwitter className='twitter'/>
        <AiFillFacebook className='facebook'/>
      </p>
    </div>
  )
}

export default Footer