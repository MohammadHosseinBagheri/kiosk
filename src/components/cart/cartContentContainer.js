import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { Container, Col, Row, Button, FormControl } from "react-bootstrap";
import CartProduct from "./cartProduct";
import emptyCartImg from "./../../assets/icon/empty-cart.png";
import Login from "./../account/login";
import { Modal } from "react-bootstrap";
import DiceIcons from "./../diceIcons/diceIcons";

const CartContentContainer = (props) => {
  const { products, url } = props;
  const [isProduct, setIsProduct] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showInfoUserModal, setShowInfoUserModal] = useState(false);
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const showLoginModalHandler = () => {
    setShowLoginModal(true);
  };
  const hideLoginModalHandler = () => {
    setShowLoginModal(false);
  };

  const hideInfoUserModalHandler = () => {
    setShowInfoUserModal(false);
  };
  const showInfoUserModalHandler = () => {
    setShowInfoUserModal(true);
  };

  const emailChangedHandler = (event) => {
    setEmail(event.target.value);
  };
  const phoneNumberChangedHandler = (event) => {
    setPhoneNumber(event.target.value);
  };

  useEffect(() => {
    products.length > 0 ? setIsProduct(true) : setIsProduct(false);
  }, [products.length]);
  const goToHome = () => {
    url.history.push("/");
  };

  let isLoginedUser = Object.keys(props.loginedUser).length > 0;

  return (
    <div className="cart">
      {isLoginedUser ? (
        isProduct ? (
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
                        375000<span> تومن</span>
                      </div>
                    </Col>
                    <Col className="px-0">
                      <Button
                        onClick={showInfoUserModalHandler}
                        block
                        style={{ borderRadius: "0" }}
                      >
                        ثبت سفارش
                      </Button>
                    </Col>
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
        )
      ) : (
        <Container>
          <Row dir="rtl">
            <span>برای مشاهده سبد خرید خود، لازم است ابتدا</span>
            <Button
              className="pt-0 border-bottom-0"
              variant="link"
              onClick={showLoginModalHandler}
            >
              <span>وارد سایت</span>
            </Button>
            شوید
          </Row>
          <DiceIcons />
        </Container>
      )}
      <Login show={showLoginModal} hideHandle={hideLoginModalHandler} />
      <Modal
        centered
        dir="rtl"
        show={showInfoUserModal}
        onHide={hideInfoUserModalHandler}
      >
        <Modal.Header className="text-right">
          <Modal.Title>
            برای پرداخت نیازمند اطلاعات بیشتری هستیم، متشکریم:)
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <FormControl
            onChange={(event) => emailChangedHandler(event)}
            type="email"
            placeholder="ایمیل خود را وارد کنید"
            className="mb-3"
          />
          <FormControl
            onChange={(event) => phoneNumberChangedHandler(event)}
            type="text"
            placeholder="شماره تلفن همراه خود را وارد کنید"
            className="mb-1"
          />
        </Modal.Body>
        <Modal.Footer>
          <Col>
            <Button className="w-100" variant="success">
              پرداخت
            </Button>
          </Col>
          <Col>
            <Button
              className="w-100"
              variant="outline-warning"
              onClick={hideInfoUserModalHandler}
            >
              لغو
            </Button>
          </Col>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

const mapStateToProps = (state) => ({
  products: state.cartProducts,
  url: state.cartUrlParams,
  loginedUser: state.loginedUser,
});

export default connect(mapStateToProps)(CartContentContainer);
