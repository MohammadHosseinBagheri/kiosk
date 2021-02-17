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
      navigation
      spaceBetween={20}
      slidesPerView={5}
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
