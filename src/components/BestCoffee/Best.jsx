import s from "./Best.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination } from "swiper";
import best_coffee_img from "../../assets/rectangle.png";
import capuchino from "../../assets/capuchino.png";
import makachino from "../../assets/makachino.jpg";
import latte from "../../assets/latte.png";
import coffee_beans from "../../assets/coffee_beans.png";
const Best = () => {
  return (
    <div className={s.container} id="best">
      <div className={s.best_coffee}>
        <img src={best_coffee_img} alt="coffee" />
        <div className={s.best_coffee_title}>
          <p>
            TRY THE BEST COFFEE <br /> IN THE CITY
          </p>
          <h3>
            Alienum phaedrum torquatos nec eu, vis detraxit periculis ex, nihil
            expetendis in mei. Mei an at dictum lacu pericula uni euripidis.
          </h3>
        </div>
        <div className={s.coffee_beans}>
          <img className={s.coffee_beans_img} src={coffee_beans} alt="beans" />
        </div>
      </div>
      <Swiper
       style={{
        "--swiper-pagination-color": "#BA9C7F",
      }}
        loop
        speed={2500}
        spaceBetween={40}
        centeredSlides={true}
        autoplay={{
          delay: 1000,
          disableOnInteraction: false,
        }}
        grabCursor={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination,Autoplay]}
        className={s.coffee_swiper}
      >
        <SwiperSlide>
          <img className={s.swiper_img} src={capuchino} alt="capuchino" />
        </SwiperSlide>
        <SwiperSlide>
          <img className={s.swiper_img} src={makachino} alt="capuchino" />
        </SwiperSlide>
        <SwiperSlide>
          <img className={s.swiper_img} src={latte} alt="capuchino" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Best;
