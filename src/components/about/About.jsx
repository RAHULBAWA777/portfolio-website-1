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
            <large>1.5+ Years </large>
           </article>

           <article className='about_card'>
             <HiOutlineUsers className='about_icon'/>
            <h5>Clients</h5>
            <large>5+</large>
           </article>

           <article className='about_card'>
             <AiOutlineFundProjectionScreen className='about_icon'/>
            <h5>Projects</h5>
            <large>90+ Completed</large>
           </article>
          </div>
          <br/>
          <p style={{fontSize:'1.5rem'}}>
            A highly enthusiastic Software Developer with a keen knowledge of his field.
          </p>
          <br/>
          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
       
      </div>
    </section>
  )
}

export default About