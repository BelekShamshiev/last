import React from "react";
import footer_logo from "../../assets/logo.png";
import s from "./Footer.module.css";
import pintrest from "../../assets/pinterst.png";
import twiter from "../../assets/Twitter.png";
import instagram from "../../assets/insta.png";
import facebook from "../../assets/Facebook.png";
import google from "../../assets/google.png";
import video from "../../assets/video.png";
const Footer = () => {
  return (
    <div className={s.container}>
      <div className={s.footer}>
        <div className={s.footer_logo}>
          <img className={s.footer_logo_photo} src={footer_logo} alt="logo" />
          <p>
            We have a hankering for some really in good <br /> melt in a mouth
            variety. Floury is the best <br /> choice to taste food and dessert.
          </p>
        </div>
        
        <div className={s.footer_contact}>
          <h1>Contact</h1>
          <p>
            329 Queensberry Street, North Melbourne <br /> VIC 3051, Australia. <br /> 123 456
            7890 <br /> support@despina.com
          </p>
        </div>
        <div className={s.footer_opening}>
          <h1>Opening Hour</h1>
          <p>
            Monday - Friday: ........6am - 9pm <br /> Saturday: ........6am - 10pm <br />
            Sunday: ........Closed <br /> *Close on special days
          </p>
        </div>
        <div className={s.footer_video}>
          <h1>Despina Video</h1>
          <img src={video} alt="video" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
