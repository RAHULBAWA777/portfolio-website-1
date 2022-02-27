import React from 'react'
import './services.css'
import {BiCheck} from 'react-icons/bi'

const Services = () => {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services_container">
      {/* UI/UX */}
        <article className='service'>
        <div className="service_head">
          <h3>UI/UX</h3>
        </div>
        <ul className='service_list'>
          <li>
            <BiCheck className='service_list-icon'/>
            <p>Logo design</p>
          </li>
          <li>
            <BiCheck className='service_list-icon'/>
            <p>Graphic Design</p>
          </li>
          <li>
            <BiCheck className='service_list-icon'/>
            <p>Web Page Designing</p>
          </li>
          
        </ul>
        </article>

        {/* WEB DEVELOPMENT */}
        <article className='service'>
        <div className="service_head">
          <h3>Web Development</h3>
        </div>
        <ul className='service_list'>
          <li>
            <BiCheck className='service_list-icon'/>
            <p>Hosting</p>
          </li>
          <li>
            <BiCheck className='service_list-icon'/>
            <p>Ongoing Website Management</p>
          </li>
          <li>
            <BiCheck className='service_list-icon'/>
            <p>Web Designing</p>
          </li>
          <li>
            <BiCheck className='service_list-icon'/>
            <p>Web Development</p>
          </li>
          <li>
            <BiCheck className='service_list-icon'/>
            <p>Web Apps</p>
          </li>
          {/* <li>
            <BiCheck className='service_list-icon'/>
            <p></p>
          </li> */}
        </ul>
        </article>

        {/* CONTENT CREATION */}
        <article className='service'>
        <div className="service_head">
          <h3>Tools Used</h3>
        </div>
        <ul className='service_list'>
          <li>
            <BiCheck className='service_list-icon'/>
            <p>Figma</p>
          </li>
          <li>
            <BiCheck className='service_list-icon'/>
            <p>Sketch</p>
          </li>
          <li>
            <BiCheck className='service_list-icon'/>
            <p>Adobe Photoshop</p>
          </li>
          <li>
            <BiCheck className='service_list-icon'/>
            <p>Git/Github</p>
          </li>
          <li>
            <BiCheck className='service_list-icon'/>
            <p>VS Code</p>
          </li>
          <li>
            <BiCheck className='service_list-icon'/>
            <p>Eclipse</p>
          </li>
        </ul>
        </article>
      </div>
    </section>
  )
}

export default Services