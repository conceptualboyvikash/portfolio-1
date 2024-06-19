import React from "react";
import "./testimonials.css";
import spotify from "../../assets/logo1.jpg";
import textUtils from "../../assets/logo2.jpg";
import education from "../../assets/logo3.jpg";

// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
// import 'swiper/css/pagination';
// import 'swiper/css/scrollbar';


const data = [
  {
    logo: spotify,
    name: 'Snake-Master',
    details:
      "A complete responsive snake game built using html,css,javascript.",
      visit: 'https://conceptualboyvikash.github.io/Snake-Master/',
      Github: 'https://github.com/conceptualboyvikash/Snake-Master'
  },
  {
    logo: textUtils,
    name: 'My_Task',
    details:
      "A full stack ,responsive MERN project which can be use as an online diary",
      visit: 'https://my-work-q3i2.onrender.com',
      Github: 'https://github.com/conceptualboyvikash/My_work'
    },
  {
    logo: education,
    name: 'Tic Tac Toe',
    details:
      "It is tic-tac-toe game build using pure html css and javascript",
      visit: 'https://conceptualboyvikash.github.io/Tic_Tac_Toe_Game/',
      Github: 'https://github.com/conceptualboyvikash/Tic_Tac_Toe_Game'
    },
];
const Testimonials = () => {
  return (
    <section id="testimonials">
      <h2>My Projects</h2>

      <Swiper className="container project__container"
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={40}
      slidesPerView={1}
      navigation = {{ clickable: true }}
      // pagination={{ clickable: true }}
      // scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}>
        {
          data.map(({logo, name, details,visit,Github},index) => {
            return (
              <SwiperSlide key={index} className="project">
                <div className="project__logo">
                  <img src={logo} />
                </div>
                <h5 className="project__name">{name}</h5>
                <small className="project__details">{details}</small>
                <a href={Github} className='btn btn-primary' target='_blank'>GitHub</a>
                <a href={visit} className='btn btn-primary' target='_blank'>Visit Site</a>
          </SwiperSlide>
            )
          })
        }
      </Swiper>
      
    </section>
  );
};

export default Testimonials;
