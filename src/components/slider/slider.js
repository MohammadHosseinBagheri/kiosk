import React from "react";
import Item from "./item/item";
import Carousel from "react-elastic-carousel";

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 300, itemsToShow: 2 },
  { width: 550, itemsToShow: 3 },
  { width: 768, itemsToShow: 4 },
  { width: 1000, itemsToShow: 5 },
  { width: 1200, itemsToShow: 6 },
];

const Slider = (props) => {
  const { products } = props
  let showArrow = window.innerWidth < 768 ? false : true;
  return (
    <div className="slider">
      <h1 className="sliderHeader"></h1>
      <div className="sliderContent">
        <Carousel
          breakPoints={breakPoints}
          isRTL={true}
          pagination={false}
          showArrows={showArrow}
        >
          {products.map(product => (
            <Item key={product._id} {...product} />
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default Slider;
