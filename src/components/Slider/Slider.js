import React from "react";
import Item from "./Item/Item";
import Carousel from "react-elastic-carousel";
import classes from "./Slider.module.css";
import img from "./../../assets/icon/app.png";
import { bestPrograms } from "./../../constants";
import { connect } from "react-redux";

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 3 },
  { width: 768, itemsToShow: 4 },
  { width: 1000, itemsToShow: 5 },
  { width: 1200, itemsToShow: 6 },
];

const Slider = (props) => {
  const { products } = props;

  return (
    <div className={classes.Slider}>
      <h1 className={classes.sliderHeader}>{bestPrograms}</h1>
      <div className={classes.sliderContent}>
        <Carousel breakPoints={breakPoints} isRTL={true}>
          {products.map((product) => (
            <Item key={product.id} {...product} />
          ))}
        </Carousel>
      </div>
    </div>
  );
};

const getProducts = (products) =>
  Object.keys(products).map((id) => products[id]);

const mapStateToProps = (state) => ({ products: getProducts(state.products) });

export default connect(mapStateToProps)(Slider);
