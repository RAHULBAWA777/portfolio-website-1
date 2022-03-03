import React from 'react'
import './portfolio.css'
import mp3 from '../../assets/mp3.jpg'
import book from '../../assets/book.jpg'
// import newsapp from '../../assets/newsapp.jpg'
import speech from '../../assets/speech.jpg'
import building from '../../assets/building.jpg'
import gclone from '../../assets/gclone.jpg'
import textUtil from '../../assets/textUtil.jpg'
import chat from '../../assets/chat.jpg'
// import trex from '../../assets/trex.jpg'
import scooter from '../../assets/scooter.jpg'

const Portfolio = () => {
  return (
    <section>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio_container">
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
          <a href="https://rahulbawa777.github.io/FlipBook/" rel='noreferrer' className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>
       
        {/* <article className="portfolio_item">
          <div className="portfolio_item-image">
            <img src={newsapp} alt="" />
          </div>
          <h3>Digi News</h3>
          <div className="portfolio_item-cta">
          <a href="https://github.com/RAHULBAWA777/Digi-News" rel='noreferrer' className='btn' target='_blank'>Source Code</a>
          <a href="https://rahulbawa777.github.io/Digi-News/" rel='noreferrer' className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article> */}

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
            <img src={building} alt="" />
          </div>
          <h3>Building view</h3>
          <div className="portfolio_item-cta">
          <a href="https://github.com/RAHULBAWA777/pannellum-building" rel='noreferrer' className='btn' target='_blank'>Source Code</a>
          <a href="https://rahulbawa777.github.io/pannellum-building/" rel='noreferrer' className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>

        <article className="portfolio_item">
          <div className="portfolio_item-image">
            <img src={gclone} alt="" />
          </div>
          <h3>Google Homepage Clone</h3>
          <div className="portfolio_item-cta">
          <a href="https://github.com/RAHULBAWA777/GoogleHomePage-ui" rel='noreferrer' className='btn' target='_blank'>Source Code</a>
          <a href="https://rahulbawa777.github.io/GoogleHomePage-ui/" rel='noreferrer' className='btn btn-primary' target='_blank'>Live Demo</a>
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
            <img src={chat} alt="" />
          </div>
          <h3>iChat-App</h3>
          <div className="portfolio_item-cta">
          <a href="https://github.com/RAHULBAWA777/iChat-App" rel='noreferrer' className='btn' target='_blank'>Source Code</a>
          <a href="https://rahulbawa777.github.io/iChat-App/" rel='noreferrer' className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>

        {/* <article className="portfolio_item">
          <div className="portfolio_item-image">
            <img src={trex} alt="" />
          </div>
          <h3>T-Rex Runner</h3>
          <div className="portfolio_item-cta">
          <a href="https://github.com/RAHULBAWA777/T-Rex-Runner-game-" rel='noreferrer' className='btn' target='_blank'>Source Code</a>
          <a href="https://rahulbawa777.github.io/T-Rex-Runner-game-/" rel='noreferrer' className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article> */}

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
      </div>
    </section>
  )
}

export default Portfolio