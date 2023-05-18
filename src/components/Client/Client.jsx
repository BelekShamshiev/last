import s from "./Client.module.css"
import down from "../../assets/down.png";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import il from "../../assets/il.png"
import "swiper/css/scrollbar";
import ula from "../../assets/ula-round.png"
import keraemoe from "../../assets/keraemoe.png"
import robert from "../../assets/artur-round.png"
import { Autoplay } from "swiper";
const Client = () => {
  return (
    <div className={s.container_client}id="rev">
      <div className={s.client} >
        <h1>What Clients Say</h1>
      </div>
      <div className={s.p_client} >
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
        <SwiperSlide>
        <div className={s.client_photo}>
            <img src={keraemoe} alt="eqfwe" />
          </div>
          <div className={s.client_name}>
            <h1>Kera Chort</h1>
          </div>
          <div className={s.client_profession}>
            <p>Chort</p>
          </div>
          <div className={s.client_title}>
            <p>
              ВЫ ВСЕ ЧОРТЫ ЖЕ ЕСТЬ
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={s.client_photo}>
            <img src={il} alt="" />
          </div>
          <div className={s.client_name}>
            <h1>Arykbaev Ilgiz</h1>
          </div>
          <div className={s.client_profession}>
            <p></p>
          </div>
          <div className={s.client_title}>
            <p>
              Дадададада 
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className={s.client_photo}>
            <img src={ula} alt="sefsef" />
          </div>
          <div className={s.client_name}>
            <h1>Yuhwang</h1>
          </div>
          <div className={s.client_profession}>
            <p>Desingh/Ui-Ux</p>
          </div>
          <div className={s.client_title}>
            <p>
              Где мой подик
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <div className={s.client_photo}>
            <img src={robert} alt="" />
          </div>
          <div className={s.client_name}>
            <h1>Artur</h1>
          </div>
          <div className={s.client_profession}>
            <p>Team Lead</p>
          </div>
          <div className={s.client_title}>
            <p>
            As for me, the layout is shit, but for the first time it will do
            </p>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Client;
