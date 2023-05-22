import React from "react";
import s from "./Coffee.module.css";
const LokBlock = ({ img, name, price, title }) => {
  return (
    <div className={s.menu}>
      <img src={img} alt="logo" />
      <div className={s.menu_title}>
        <div className={s.menu_title_dection}>
          <h4>{name}</h4>
          <p>$ {price}</p>
        </div>
        <p className={s.menu_title_p}>{title}</p>
      </div>
    </div>
  );
};

export default LokBlock;
