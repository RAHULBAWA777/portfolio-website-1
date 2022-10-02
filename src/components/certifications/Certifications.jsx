
import React, { useRef, useState } from "react";
import './certifications.css'
import gssoc from '../../assets/gssoc.png'
import dataStats from '../../assets/dataStats2.jpg'
import infowiz from '../../assets/infowiz.jpg'
import bbr from '../../assets/bbr.jpg'

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cube";
import "swiper/css/pagination";

import "./certifications.css";

// import required modules
import { EffectCube, Pagination } from "swiper";


const Certifications = () => {
  return (
    <>
    <section id='certifications'>
    <h5>My Certifications</h5>
      <h2>Certificates</h2>
      <Swiper 
        effect={"cube"}
        grabCursor={true}
        cubeEffect={{
          shadow: true,
          slideShadows: true,
          shadowOffset: 20,
          shadowScale: 0.94,
        }}
        pagination={true}
        modules={[EffectCube, Pagination]}
        className="mySwiper container"
      >
        <SwiperSlide>
          <img src={gssoc} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={dataStats} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={infowiz} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={bbr} />
        </SwiperSlide>
      </Swiper>
  </section>
    </>
  )
}

export default Certifications