import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { Container, Col, Row, Button } from "react-bootstrap";
import CartProduct from "./cartProduct";
import emptyCartImg from "./../../assets/icon/empty-cart.png";
import InfoModal from "./infoModal";
import OrdersHistory from "./ordersHistory";
import axios from "axios";

const CartContentContainer = (props) => {
  const { products, url, loginedUser } = props;

  const [isProduct, setIsProduct] = useState(false);
  const [showInfoUserModal, setShowInfoUserModal] = useState(false);
  const [showHistoryModal, setShowHistoryModal] = useState(false);
  const [purchasedProducts, setPurchasedProducts] = useState([]);

  const showHistoryModalHandler = () => {
    setShowHistoryModal(true);
  };

  const hideHistoryModalHandler = () => {
    setShowHistoryModal(false);
  };

  let totalPrice = 0;
  products.map((product) => {
    const old = totalPrice;
    totalPrice = old + +product.price;
  });

  const hideInfoUserModalHandler = () => {
    setShowInfoUserModal(false);
  };
  const showInfoUserModalHandler = () => {
    setShowInfoUserModal(true);
  };

  useEffect(() => {
    products.length > 0 ? setIsProduct(true) : setIsProduct(false);
    const api =
      "https://still-headland-88471.herokuapp.com/api/peyment?id=" +
      loginedUser.id;
    axios
      .get(api)
      .then((res) => {
        setPurchasedProducts(res.data);
        console.log(res);
      })
      .catch((err) => console.log(err));
  }, [products.length,showHistoryModal]);
  const goToHome = () => {
    url.history.push("/");
  };
  let isLoginedUser = Object.keys(loginedUser).length > 0;

  return (
    <div className="cart">
      {isProduct ? (
        <>
          <Container dir="rtl">
            <Row>
              <Col sm={12} md={8}>
                {products.map((product) => {
                  return <CartProduct product={product} />;
                })}
              </Col>
              <Col sm={12} md={4} className=" d-none d-md-block">
                <Row className="cartTotalPriceContent bg-light mt-5 mx-1 text-center">
                  <Col xs={12} className="px-0 border-bottom py-2">
                    <div>جمع سبد خرید</div>
                  </Col>
                  <Col xs={12} className="px-0 py-2">
                    <div>
                      {totalPrice}
                      <span> تومن</span>
                    </div>
                  </Col>
                  <Col xs={12} className="px-0">
                    <Button
                      onClick={showInfoUserModalHandler}
                      block
                      style={{ borderRadius: "0" }}
                      variant="info"
                    >
                      ثبت سفارش
                    </Button>
                  </Col>
                  {isLoginedUser ? (
                    <Col xs={12} className="mt-1 px-0">
                      <Button
                        variant="secondary"
                        block
                        style={{ borderRadius: "0" }}
                        onClick={showHistoryModalHandler}
                      >
                        تاریخچه خریدها
                      </Button>
                    </Col>
                  ) : null}
                </Row>
              </Col>
            </Row>
          </Container>
          <Container dir="rtl" className="text-center">
            <Row className="d-unset d-md-none fixed-bottom bg-light border-top shadow py-2">
              <Col xs={6}>
                <div className="mb-1">جمع سبد خرید</div>
                <div>
                  375000<span> تومن</span>
                </div>
              </Col>
              <Col
                xs={6}
                className="d-flex justify-content-center align-items-center"
              >
                <Button onClick={showInfoUserModalHandler}>ثبت سفارش</Button>
              </Col>
            </Row>
          </Container>
        </>
      ) : (
        <div className="d-flex flex-column justify-content-center align-items-center">
          <img src={emptyCartImg} />
          <p>!سبد خرید شما خالی است</p>
          <p className="mt-3">
            <span>برای مشاهده برنامه ها </span>
            <Button onClick={goToHome} variant="link" className="px-0">
              اینجا
            </Button>
            <span> کلیک کنید </span>
          </p>
        </div>
      )}
      <InfoModal
        showInfoUserModal={showInfoUserModal}
        hideInfoUserModalHandler={hideInfoUserModalHandler}
        totalPrice={totalPrice}
      />
      {isLoginedUser ? (
        <OrdersHistory
          show={showHistoryModal}
          hide={hideHistoryModalHandler}
          purchasedProducts={purchasedProducts}
        />
      ) : null}
    </div>
  );
};

const mapStateToProps = (state) => ({
  products: state.cartProducts,
  url: state.cartUrlParams,
  loginedUser: state.loginedUser,
});

export default connect(mapStateToProps)(CartContentContainer);
