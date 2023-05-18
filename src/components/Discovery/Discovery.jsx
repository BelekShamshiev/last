import React from 'react';
import s from './Discovery.module.css'
import "swiper/css";
import Coffee from "../../components/Coffee/Coffee"
import "swiper/css/pagination";
import { Link } from "react-router-dom";
import { coffee } from '../constant/coffee';
export default function App() {
  return (
    <>
	    <div className={s.container}>
    <div className={s.discovery_section}>
      <h1 id='menu'>Discover Menu</h1>
      <h2>What Happens Here</h2>
      <div className={s.menu}>
        {coffee.map((item) =>{
          return < Coffee id={item.id} img={item.img} name={item.name} price={item.price} title={item.title}  />;
        })}
              </div>
      <Link  className={s.discovery_btn}>Explore Full Menu</Link>
	    </div>
    </div>
    </>
  );
}
