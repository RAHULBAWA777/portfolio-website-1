import React from 'react'
import './portfolio.css'
import mp3 from '../../assets/mp3.jpg'
import book from '../../assets/book.jpg'
import newsapp from '../../assets/newsapp.jpg'
import speech from '../../assets/speech.jpg'
import Ecomm from '../../assets/eccom.png'
import cloudbook from '../../assets/cloudbook.png'
import textUtil from '../../assets/textUtil.jpg'
import chat from '../../assets/chat.jpg'
import ambience from '../../assets/theme.png'
import vasu from '../../assets/vasu.png'
import scooter from '../../assets/scooter.jpg'

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio_container">
        <article className="portfolio_item">
          <div className="portfolio_item-image">
            <img src={vasu} alt="" />
          </div>
          <h3>Vasundra Projects Pvt Lmt</h3>
          <div className="portfolio_item-cta">
          <a href="https://github.com/RAHULBAWA777/Vasundra" rel='noreferrer' className='btn' target='_blank'>Source Code</a>
          <a href="http://vasundra.vercel.app/" rel='noreferrer' className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>
        <article className="portfolio_item">
          <div className="portfolio_item-image">
            <img src={ambience} alt="" />
          </div>
          <h3>Theme Ambience</h3>
          <div className="portfolio_item-cta">
          <a href="https://github.com/RAHULBAWA777/ThemeAmbienceProject" rel='noreferrer' className='btn' target='_blank'>Source Code</a>
          <a href="https://www.themeambience.com/" rel='noreferrer' className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>
        <article className="portfolio_item">
          <div className="portfolio_item-image">
            <img src={mp3} alt="" />
          </div>
          <h3>MP3 Player</h3>
          <div className="portfolio_item-cta">
          <a href="https://github.com/RAHULBAWA777/mp3Player" rel='noreferrer' className='btn' target='_blank'>Source Code</a>
          <a href="https://rahulbawa777.github.io/mp3Player/" rel='noreferrer' className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>

        <article className="portfolio_item">
          <div className="portfolio_item-image">
            <img src={book} alt="" />
          </div>
          <h3>Flip Book</h3>
          <div className="portfolio_item-cta">
          <a href="https://github.com/RAHULBAWA777/FlipBook" rel='noreferrer' className='btn' target='_blank'>Source Code</a>
          <a href="https://rahulbawa777.github.io/FlipBook/" rel='noreferrer' className='btn btn-primary ' target='_blank'>Live Demo</a>
          </div>
        </article>
       
        <article className="portfolio_item">
          <div className="portfolio_item-image">
            <img src={newsapp} alt="" />
          </div>
          <h3>Digi News</h3>
          <div className="portfolio_item-cta">
          <a href="https://github.com/RAHULBAWA777/Digi-News" rel='noreferrer' className='btn' target='_blank'>Source Code</a>
          <a rel='noreferrer' className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>

        <article className="portfolio_item">
          <div className="portfolio_item-image">
            <img src={speech} alt="" />
          </div>
          <h3>Speech Recognition</h3>
          <div className="portfolio_item-cta">
          <a href="https://github.com/RAHULBAWA777/speech-recognition" rel='noreferrer' className='btn' target='_blank'>Source Code</a>
          <a href="https://rahulbawa777.github.io/speech-recognition/" rel='noreferrer' className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>

        <article className="portfolio_item">
          <div className="portfolio_item-image">
            <img src={chat} alt="" />
          </div>
          <h3>iChat-App</h3>
          <div className="portfolio_item-cta">
          <a href="https://github.com/RAHULBAWA777/iChat-App" rel='noreferrer' className='btn' target='_blank'>Source Code</a>
          <a href="https://rahulbawa777.github.io/iChat-App/" rel='noreferrer' className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>

        <article className="portfolio_item">
          <div className="portfolio_item-image">
            <img src={Ecomm} alt="" />
          </div>
          <h3>Redux-Ecommerce</h3>
          <div className="portfolio_item-cta">
          <a href="https://github.com/RAHULBAWA777/Redux-Ecommerce" rel='noreferrer' className='btn' target='_blank'>Source Code</a>
          <a href="https://redux-ecommerce-neon.vercel.app/" rel='noreferrer' className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>

        <article className="portfolio_item">
          <div className="portfolio_item-image">
            <img src={cloudbook} alt="" />
          </div>
          <h3>CloudBook (MERN Stack)</h3>
          <br/>
         
         
          <div className="portfolio_item-cta">
          <a href="https://github.com/RAHULBAWA777/cloudbook" rel='noreferrer' className='btn' target='_blank'>Source Code</a>
          <a  rel='noreferrer' className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>

        <article className="portfolio_item">
          <div className="portfolio_item-image">
            <img src={textUtil} alt="" />
          </div>
          <h3>Text-Utils</h3>
          <div className="portfolio_item-cta">
          <a href="https://github.com/RAHULBAWA777/TextUtils-React" rel='noreferrer' className='btn' target='_blank'>Source Code</a>
          <a href="https://rahulbawa777.github.io/TextUtils-React/" rel='noreferrer' className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>

        <article className="portfolio_item">
          <div className="portfolio_item-image">
            <img src={scooter} alt="" />
          </div>
          <h3>Scooter website</h3>
          <div className="portfolio_item-cta">
          <a href="https://github.com/RAHULBAWA777/scooter-client" rel='noreferrer' className='btn' target='_blank'>Source Code</a>
          <a href="https://rahulbawa777.github.io/scooter-client/" rel='noreferrer' className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>

        <article className="portfolio_item">
          <div className="portfolio_item-image">
            {/* <img src={trex} alt="" /> */}
          </div>
          <h3>And tons of more Projects</h3>
          <h3>Click to go to my Github profile</h3>
          <div className="portfolio_item-cta">
          <a href="https://github.com/RAHULBAWA777/" rel='noreferrer' className='btn' target='_blank'>Source Code</a>
          {/* <a href="https://rahulbawa777.github.io/T-Rex-Runner-game-/" rel='noreferrer' className='btn btn-primary' target='_blank'>Live Demo</a> */}
          </div>
        </article>
      </div>
    </section>
  )
}

export default Portfolio