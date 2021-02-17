import React from "react";
import Item from "./item/item";
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Navigation } from 'swiper'
import 'swiper/swiper-bundle.css'



const Slider = (props) => {

  const { products } = props

  SwiperCore.use([Navigation])

  const swiper = products.length > 0
    ? <Swiper
      className='slider'
      navigation
      spaceBetween={10}
      slidesPerView={1}
      breakpoints={{
        270: {
          slidesPerView: 1,
        },
        368: {
          slidesPerView: 2,
        },
        576: {
          slidesPerView: 4,
        },
        768: {
          slidesPerView: 5,
        },
        992: {
          slidesPerView: 6,
        },
        1200: {
          slidesPerView: 7,
        },
      }}
    >
      {products.map(product => (
        <SwiperSlide key={product._id}>
          <Item {...product} />
        </SwiperSlide>
      ))}
    </Swiper>
    : null

  return (
    <>{swiper}</>
  );
};

export default Slider;
