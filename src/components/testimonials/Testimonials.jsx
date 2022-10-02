import React from 'react'
import './testimonials.css'
import rFace from '../../assets/nag.png'
import xFace from '../../assets/dummy.jpg'

// import Swiper core and required modules
import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';



const data = [
  {
    avatar: rFace,
    name: "Vuppala Nagehwar Gupta",
    review: "Rahul provides best in class services for my startup BackBencher's Realty Pvt Lmt"
  },
  {
    avatar: xFace,
    name: "Sumit Kumar Gupta - Co-Founder of Data Stats",
    review: "I have found him to be self-starter who is always motivated and dedicated towards his work."
  },
  // {
  //   avatar: rFace,
  //   name: "rahuuuuuuuuuuuuuuuu",
  //   review: "bisdhdui ihscuinusdn csnnscindsi ncdnsnicn nocnubucbd hcuiwhc gyuegu a yugfuyg ggauoilncuihhea yobif ud u isuafiud iuuifhsu laud uebfbeu udfisla uhaildf ufhieu f"
  // },
  // {
  //   avatar: rFace,
  //   name: "rahuuuuuuuuuuuuuuuu",
  //   review: "bisdhdui ihscuinusdn csnnscindsi ncdnsnicn nocnubucbd hcuiwhc gyuegu a yugfuyg ggauoilncuihhea yobif ud u isuafiud iuuifhsu laud uebfbeu udfisla uhaildf ufhieu f"
  // },
]

const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonials_container"  // install Swiper modules
      modules={[ Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      pagination={{ clickable: true }}
     >
        {
          data.map(({ avatar, name, review }, index) => {
            return (
              <SwiperSlide key={index} className="testimonial"  
              modules={[ Pagination]}
              pagination={{clickable:true}}
              >

                <div className="client_avatar">
                  <img src={avatar} alt="" />
                </div>
                <h5 className="client_name">{name}</h5>
                <small className="client_review">{review}</small>
              </SwiperSlide>
            )
          })
        }
      </Swiper>
    </section>
  )
}

export default Testimonials


