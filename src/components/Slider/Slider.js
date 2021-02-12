import React from "react";
import Item from "./Item/Item";
import Carousel from "react-elastic-carousel";
import classes from "./Slider.module.css";
import img from "./../../assets/icon/app.png";
import { bestPrograms } from "./../../constants";

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 3 },
  { width: 768, itemsToShow: 4 },
  { width: 1000, itemsToShow: 5 },
  { width: 1200, itemsToShow: 6 },
];

const Slider = () => {
  const items = [
    { id: 1, title: "item #1", src: `${img}` },
    { id: 2, title: "item #2", src: `${img}` },
    { id: 3, title: "item #3", src: `${img}` },
    { id: 4, title: "item #4", src: `${img}` },
    { id: 5, title: "item #5", src: `${img}` },
    { id: 6, title: "item #6", src: `${img}` },
    { id: 7, title: "item #7", src: `${img}` },
    { id: 8, title: "item #8", src: `${img}` },
    { id: 9, title: "item #9", src: `${img}` },
    { id: 10, title: "item #10", src: `${img}` },
    { id: 11, title: "item #11", src: `${img}` },
    { id: 12, title: "item #12", src: `${img}` },
  ];

  return (
    <div className={classes.Slider}>
      <h1 className={classes.sliderHeader}>{bestPrograms}</h1>
      <div className={classes.sliderContent} >
        <Carousel breakPoints={breakPoints} isRTL={true}>
          {items.map((item) => (
            <Item key={item.id} title={item.title} src={item.src} />
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default Slider;
