import s from "./Client.module.css";
import down from "../../assets/down.png";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/scrollbar";
import { Autoplay } from "swiper";
import { client } from "../constant/client";
const Client = ({ img, name, profesion, title }) => {
  return (
    <div className={s.container_client} >
      <div id="rev"></div>
      <div className={s.client}>
        <h1>What Clients Say</h1>
      </div>
      <div className={s.p_client}>
        <p>1500+ Satisfied Clients</p>
      </div>
      <Swiper
        loop
        speed={2500}
        autoplay={{
          delay: 1000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        className={s.client_swiper}
      >
        {client.map((item) => (
          <SwiperSlide className={s.client_swiper_slide} id={item.id}>
            <div className={s.client_photo}>
              <img src={item.img} alt="img" />
            </div>
            <div className={s.client_name}>
              <h1>{item.name}</h1>
            </div>
            <div className={s.client_profession}>
              <p>{item.profesion}</p>
            </div>
            <div className={s.client_title}>
              <p>{item.title}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Client;
