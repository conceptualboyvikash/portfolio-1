import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
const HeaderSocials = () => {
  return (
    <div className='header__socials'>
      <a href="https://www.linkedin.com/in/vikash-kumar-77b626221/" target="_blank"><BsLinkedin/></a>
      <a href="https://github.com/conceptualboyvikash" target="_blank"><FaGithub/></a>
    </div>
  )
}

export default HeaderSocials
