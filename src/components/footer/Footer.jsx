import React from 'react'
import './footer.css'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {BsInstagram} from 'react-icons/bs'

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer_logo'>RAHULBAWA</a>

      <ul className="permalinks">
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#testimonials">Testimonials</a></li>
        <li><a href="#certifications">Certifications</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer_socials">
        <a href="https://www.linkedin.com/in/rahul-kumar-82326320a" rel='noreferrer' target='_blank'><BsLinkedin/></a>
        <a href="https://github.com/RAHULBAWA777" rel='noreferrer' target='_blank'><BsGithub/></a>
        <a href="https://instagram.com/thedevilinme2021" rel='noreferrer' target='_blank'><BsInstagram/></a>
      </div>

      <div className="footer_copyright">
        <small>&copy; Rahuk Kumar. All rights reserved</small>
      </div>
    </footer>
  )
}

export default Footer