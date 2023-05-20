import s from "./Coffeedespina.module.css";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Modal, Button } from 'antd';
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper";
import { coffeedespina } from "../constant/Cooffeedespina";

const Coffeedespina = ({img}) => {
  
    return (
        <div className={s.container}>
        <div className={s.despina}>
        <h1>#coffeedespina</h1>
      </div>
      <div className={s.despina_description}>
        <p>
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
        {coffeedespina.map((item) => (
            <SwiperSlide>
            <img className={s.despina_one_img} src={item.img} alt="coffee_despina" />
        </SwiperSlide>
        ))}
      

      </Swiper>
        </div>
    );
};

export default Coffeedespina;