import React from "react";
import Item from "./item/item";
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Navigation } from 'swiper'
import 'swiper/swiper-bundle.css'
import { Spinner } from 'react-bootstrap'


const Slider = (props) => {

  const { products } = props

  const categori = products.length > 0
    ? products[0].categori : null

  SwiperCore.use([Navigation])

  const swiper = products.length > 0
    ? <Swiper
      navigation
      dir='rtl'
      spaceBetween={10}
      slidesPerView={3}
      breakpoints={{
        640: {
          slidesPerView: 6,
        },
        1024: {
          slidesPerView: 8,
        }
      }}

    >
      {products.map(product => (
        <SwiperSlide key={product._id}>
          <Item product={product} />
        </SwiperSlide>
      ))}
    </Swiper>
    : <Spinner animation='border' variant='primary' />

  return (
    <div className='slider'>
      <h2 className='text-right'>{categori}</h2>
      {swiper}
    </div>
  );
};

export default Slider;
