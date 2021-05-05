import React, { useEffect } from "react";
import CartContainer from "./../containers/cartContainer";
import { connect } from "react-redux";
import { cartUrlParams } from "./../redux/actions";

const Cart = (props) => {
  const urlParams = {
    history: props.history,
    match: props.match,
    location: props.location,
  };
  useEffect(() => {
    props.dispatch(cartUrlParams(urlParams));
  }, []);
  return <CartContainer />;
};

export default connect()(Cart);
