import React from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {TiSocialInstagram} from 'react-icons/ti'
import {BsLinkedin} from 'react-icons/bs'
import { useRef } from 'react';
import emailjs from 'emailjs-com'

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_c1icwjd', 'template_87ucm8n', form.current, 'i-bV_Zl96ylZ4TKUD')
    e.target.reset()
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <section id='contact'>
      <h5>Get in Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact_container">
        <div className="contact_options">
          <article className="contact_option">
              <MdOutlineEmail className='contact_option-icon'/>
            <h4>Email</h4>
            <h5>rahulbawa514@gmail.com</h5>
            <a href="mailto:rahulbawa514@gmail.com">Send a message</a>
          </article>

          <article className="contact_option">
              <TiSocialInstagram className='contact_option-icon'/>
            <h4>Instagram</h4>
            <h5>thedevilinme2021</h5>
            <a href="https://intsagram.com/thedevilinme2021">Send a message</a>
          </article>

          <article className="contact_option">
              <BsLinkedin className='contact_option-icon'/>
            <h4>LinkedIn</h4>
            <h5>Rahul Kumar</h5>
            <a href="www.linkedin.com/in/rahul-kumar-82326320a">Connect with me</a>
          </article>
        </div>
        {/* END OF CONTACT */}
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required />
          <input type="email" name='email' placeholder='Your Email' required />
          <textarea name='message' rows="7" placeholder='Your Message' required />
          <button type='submit' className="btn btn-primary">Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact