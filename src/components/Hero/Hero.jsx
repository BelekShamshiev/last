import s from "./Hero.module.css";
import coffe from "../../assets/coffee.svg";
import milk from "../../assets/milk.svg";
import coctail from "../../assets/cocktails.svg";
import bewerages from "../../assets/bewerages.svg";
import tea from "../../assets/tea.svg";
import cake from "../../assets/cake.svg";
import bob from "../../assets/drink.svg";
import drink from "../../assets/bob.svg";
import { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
const Hero = () => {
  return (
    <div className={s.container}>
      <div className={s.low_container}>
        <div className={s.low}>
          <Swiper
            loop
            speed={2500}
            autoplay={{
              delay: 1000,
              disableOnInteraction: false,
            }}
            slidesPerView={1}
            // spaceBetween={10}
            grabCursor={true}
            pagination={{
              clickable: true,
            }}
            breakpoints={{
              "@0.00": {
                slidesPerView: 2,
                // spaceBetween: 10,
              },
              "@0.75": {
                slidesPerView: 3,
                // spaceBetween: 30,
              },
              "@1.00": {
                slidesPerView: 4,
                // spaceBetween:10 ,
              },
              "@1.50": {
                slidesPerView: 6,
                // spaceBetween: 10,
              },
            }}
            className={s.hero_swiper}
            modules={[Autoplay]}
          >
            <SwiperSlide>
              <img className={s.coffe} src={coffe} alt="coffe"></img>{" "}
              <p className={s.hero_swiper_p}>Coffe</p>
            </SwiperSlide>
            <SwiperSlide>
              <img className={s.coffe} src={milk} alt="milk" />{" "}
              <p className={s.hero_swiper_p}>Milk</p>
            </SwiperSlide>
            <SwiperSlide>
              <img className={s.coffe} src={coctail} alt="coctail" />{" "}
              <p className={s.hero_swiper_p}>Coctail</p>
            </SwiperSlide>
            <SwiperSlide>
              <img className={s.coffe} src={bewerages} alt="bewerages" />{" "}
              <p className={s.hero_swiper_p}>Bewerages</p>
            </SwiperSlide>
            <SwiperSlide>
              <img className={s.coffe} src={tea} alt="tea" />{" "}
              <p className={s.hero_swiper_p}>Tea</p>
            </SwiperSlide>
            <SwiperSlide>
              <img className={s.coffe} src={cake} alt="cake" />{" "}
              <p className={s.hero_swiper_p}>Cake</p>
            </SwiperSlide>
            <SwiperSlide>
              <img className={s.coffe} src={coffe} alt="coffe"></img>{" "}
              <p className={s.hero_swiper_p}>Coffe</p>
            </SwiperSlide>
            <SwiperSlide>
              <img className={s.coffe} src={milk} alt="milk" />{" "}
              <p className={s.hero_swiper_p}>Milk</p>
            </SwiperSlide>
            <SwiperSlide>
              <img className={s.coffe} src={coctail} alt="coctail" />{" "}
              <p className={s.hero_swiper_p}>Coctail</p>
            </SwiperSlide>
            <SwiperSlide>
              <img className={s.coffe} src={bewerages} alt="bewerages" />{" "}
              <p className={s.hero_swiper_p}>Bewerages</p>
            </SwiperSlide>
            <SwiperSlide>
              <img className={s.coffe} src={tea} alt="tea" />{" "}
              <p className={s.hero_swiper_p}>Tea</p>
            </SwiperSlide>
            <SwiperSlide>
              <img className={s.coffe} src={cake} alt="cake" />{" "}
              <p className={s.hero_swiper_p}>Cake</p>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>

      <div className={s.best}>
        <div className={s.right}>
          <img src={bob} alt="bob" />
        </div>
        <div className={s.title}>
          <div className={s.title_guality} >
          <h1>BEST QUALITY</h1>
          <h5>ESTABLISHED IN 1991</h5>
          </div>
          <div className={s.title_down}>
          <h2>SPECIAL COFFEE</h2>
          <h3>BEANS</h3>
          </div>
        </div>
        <div className={s.left}>
          <img src={drink} alt="drink" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
