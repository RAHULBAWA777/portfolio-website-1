import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {BsInstagram} from 'react-icons/bs'

const HeaderSocials = () => {
  return (
    <div className='header_socials' data-aos="fade-up">
        <a href="https://www.linkedin.com/in/rahul-kumar-82326320a" rel="noreferrer" target="_blank"><BsLinkedin/></a>
        <a href="https://github.com/RAHULBAWA777" rel="noreferrer" target="_blank"><BsGithub/></a>
        <a href="https://instagram.com/thedevilinme2021" rel="noreferrer" target="_blank"><BsInstagram/></a>
    </div>
  )
}

export default HeaderSocials