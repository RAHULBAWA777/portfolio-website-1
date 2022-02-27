import React from 'react'
import './about.css'
import Face from '../../assets/1626442057910 (2).jpg'
import {FaAward} from 'react-icons/fa'
import {HiOutlineUsers} from 'react-icons/hi'
import {AiOutlineFundProjectionScreen} from 'react-icons/ai'


const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about_container">
        <div className="about_me">
          <div className="about_me-image">
            <img className='poki' src={Face} alt="" />
          </div>
        </div>

        <div className="about_content">
          <div className="about_cards">
           <article className='about_card'>
             <FaAward className='about_icon'/>
            <h5>Experience</h5>
            <small>1.5+ Years working</small>
           </article>

           <article className='about_card'>
             <HiOutlineUsers className='about_icon'/>
            <h5>Clients</h5>
            <small>2+</small>
           </article>

           <article className='about_card'>
             <AiOutlineFundProjectionScreen className='about_icon'/>
            <h5>Projects</h5>
            <small>8+ Completed</small>
           </article>
          </div>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Inventore doloremque itaque, totam mollitia, amet cupiditate temporibus consequatur ipsam sequi facilis vel aperiam quo!
          </p>
          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About