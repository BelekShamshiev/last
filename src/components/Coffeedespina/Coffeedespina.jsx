import s from "./Coffeedespina.module.css";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Modal, Button } from 'antd';
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper";
import despina_one from "../../assets/despina_one.png";
import despina_two from "../../assets/despina_two.png";
import despina_three from "../../assets/despina_three.png";
import despina_four from "../../assets/despina_four.png";
import despina_five from "../../assets/despina_five.png";
import instagram from "../../assets/instagram.png";
const Coffeedespina = () => {
  
    return (
        <div className={s.container}>
        <div className={s.despina}>
        <h1 className={s.despina_name}>#coffeedespina</h1>
      </div>
      <div className={s.despina_description}>
        <p className={s.despina_description_p}>
          Enjoyed your stay at Despina? Share your moments with us. Follow us on
          Instagram and use
        </p>
        </div>
        <Swiper
         style={{
          "--swiper-pagination-color": "#BA9C7F",
        }}
         loop
         speed={2500}
         autoplay={{
          delay: 1000,
          disableOnInteraction: false,
        }}
        slidesPerView={1}
        spaceBetween={10}     
         grabCursor={true}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          "@0.00": {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          "@0.75": {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          "@1.00": {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          "@1.50": {
            slidesPerView: 5,
            spaceBetween: 60,
          },
        }}
        modules={[Pagination,Autoplay]}
        className={s.coffeedespina}
      >
        <SwiperSlide>
            <img className={s.despina_one_img} src={despina_one} alt="coffee_despina" />
        </SwiperSlide>
        <SwiperSlide>
          
            <img className={s.despina_one_img} src={despina_two} alt="coffee_despina" />
        </SwiperSlide>
        <SwiperSlide>
          
            <img className={s.despina_one_img} src={despina_three} alt="coffee_despina" />
        </SwiperSlide>        
        <SwiperSlide>
          
            <img className={s.despina_one_img} src={despina_four} alt="coffee_despina" />
        </SwiperSlide>      
        <SwiperSlide>
          
            <img className={s.despina_one_img} src={despina_three} alt="coffee_despina" />
        </SwiperSlide>        
        <SwiperSlide>
          
            <img className={s.despina_one_img} src={despina_one} alt="coffee_despina" />
        </SwiperSlide>
        <SwiperSlide>
          
            <img className={s.despina_one_img} src={despina_two} alt="coffee_despina" />
        </SwiperSlide>
        <SwiperSlide>
          
            <img className={s.despina_one_img} src={despina_three} alt="coffee_despina" />
        </SwiperSlide>        
        <SwiperSlide>
          
            <img className={s.despina_one_img} src={despina_four} alt="coffee_despina" />
        </SwiperSlide>      
        <SwiperSlide>
          
            <img className={s.despina_one_img} src={despina_three} alt="coffee_despina" />
        </SwiperSlide>   
      </Swiper>
        </div>
    );
};

export default Coffeedespina;