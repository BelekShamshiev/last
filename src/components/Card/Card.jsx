import React from "react";
import s from "./Card.module.css";
import { Button, Space } from "antd";
import circle from "../../assets/circle.png"
import flavours from "../../assets/girl.png";
import sale from "../../assets/machin.png";
import creat from "../../assets/spon.png";
const Card = () => {
  return (
    <div className={s.container_card}>
      <div className={s.card_all}>
        <div className={s.card_flavor}>
          <div className={s.flavor_title}>
            <p className={s.flavor_title_desc}>New coffee flavours </p>

            <button className={s.flavor_title_btn}>Read More</button>
          </div>
        </div>
        <div className={s.card_main}>
          <div className={s.card_sale}>
              <img className={s.circle} src={circle} alt="circle" /> 
            <div className={s.card_sale_title}>          

            <p>Thıs frıday 25% off</p>
            </div>
            </div>
          <div className={s.card_creat}>
            <div className={s.card_creat_title}>
              <p> ENJOYING GREAT</p>
              <button className={s.create_title_btn}>Read More</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
