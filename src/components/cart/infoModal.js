import React, { useState, useEffect } from "react";
import { Modal, FormControl, Button, Col } from "react-bootstrap";
import axios from "axios";
import { connect } from "react-redux";

const InfoModal = (props) => {
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const { loginedUser } = props;

  console.log(loginedUser);

  useEffect(() => {
    const api =
      "https://still-headland-88471.herokuapp.com/api/peyment?id=" +
      loginedUser.id;
    console.log(api);
    axios
      .get(api)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  }, []);

  const emailChangedHandler = (event) => {
    setEmail(event.target.value);
  };
  const phoneNumberChangedHandler = (event) => {
    setPhoneNumber(event.target.value);
  };

  const firstNameChangedHandler = (event) => {
    setFirstName(event.target.value);
  };

  const lastNameChangedHandler = (event) => {
    setLastName(event.target.value);
  };

  const addToFactor = () => {
    const factorInfo = {
      id: props.loginedUser.id,
      product: props.products,
      price: props.totalPrice,
    };
    axios
      .post(
        "https://still-headland-88471.herokuapp.com/api/peyment",
        factorInfo
      )
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  return (
    <Modal
      centered
      dir="rtl"
      show={props.showInfoUserModal}
      onHide={() => props.hideInfoUserModalHandler()}
    >
      <Modal.Header className="text-right">
        <Modal.Title>
          برای پرداخت نیازمند مشخصات شما هستیم، متشکریم:)
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <FormControl
          onChange={firstNameChangedHandler}
          type="text"
          placeholder="نام"
          className="mb-3"
        />
        <FormControl
          onChange={lastNameChangedHandler}
          type="text"
          placeholder="نام خانوادگی"
          className="mb-3"
        />

        <FormControl
          onChange={(event) => emailChangedHandler(event)}
          type="email"
          placeholder="ایمیل"
          className="mb-3"
        />
        <FormControl
          onChange={(event) => phoneNumberChangedHandler(event)}
          type="text"
          placeholder="شماره تلفن همراه"
          className="mb-1"
        />
      </Modal.Body>
      <Modal.Footer>
        <Col>
          <Button className="w-100" variant="success" onClick={addToFactor}>
            پرداخت
          </Button>
        </Col>
        <Col>
          <Button
            className="w-100"
            variant="outline-warning"
            onClick={props.hideInfoUserModalHandler}
          >
            لغو
          </Button>
        </Col>
      </Modal.Footer>
    </Modal>
  );
};

const mapStateToProps = (state) => ({
  loginedUser: state.loginedUser,
  products: state.cartProducts,
});

export default connect(mapStateToProps)(InfoModal);
