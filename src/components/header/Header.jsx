import React from 'react'
import './header.css'
import CTA from './CTA'
import HeaderSocials from './HeaderSocials'
import Portrait from '../../assets/1626442057939 (2).jpg'

const Header = () => {
  return (
    <header>
      <div className="container header_container">
        <h5>Hello I'm</h5>
        <h1 data-aos="fade-down">RAHUL   KUMAR </h1>
        <h5 className='text-light'>Full Stack Developer</h5>
        <CTA />
        <HeaderSocials/>

        <div className="portrait" data-aos="zoom-out-up">
          <img src={Portrait} alt="" />
        </div>

        <a href="#contact" className='scroll_down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default Header