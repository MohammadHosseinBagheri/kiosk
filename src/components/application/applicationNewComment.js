import React, { useState, useEffect } from "react";
import { Form, Row, Col, Button, Modal } from "react-bootstrap";
import { connect } from "react-redux";
import Login from "./../account/login";
import axios from "axios";

const ApplicationNewComment = (props) => {
  const { loginedUser } = props;

  const [name, setName] = useState("");
  const [comment, setComment] = useState("");
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);

  const showLoginModalHandler = () => {
    setShowLoginModal(true);
  };
  const hideLoginModalHandler = () => {
    setShowLoginModal(false);
  };

  const nameChangedHandler = (event) => {
    setName(event.target.value);
  };

  const commentChangedHandler = (event) => {
    setComment(event.target.value);
  };

  const sendComment = () => {
    // post data
    setShowSuccessModal(true);

    const commentUser = {
      name: name,
      text: comment,
      _id: props.id,
    };

    axios.post(
      "https://still-headland-88471.herokuapp.com/api/applications/add-comment",
      commentUser
    );
  };

  const hideSuccessModalHandler = () => {
    setShowSuccessModal(false);
  };

  let isLoginedUser = Object.keys(props.loginedUser).length > 0;

  return (
    <>
      <Form className="w-100 bg-light pb-5 px-5 pt-2 my-2 text-right shadow-sm rounded">
        {/* {isLoginedUser ? ( */}
        <>
          <Row>
            <Col className="pb-4">دیدگاه</Col>
          </Row>
          <Row>
            <Col xs={12}>
              <Form.Control
                onChange={nameChangedHandler}
                className="mb-3"
                placeholder="نام خود را وارد کنید..."
                value={loginedUser.username}
              />
              <Col xs={12}></Col>
              <Form.Control
                onChange={commentChangedHandler}
                className="mb-4"
                as="textarea"
                rows={3}
                placeholder="نظرت در مورد برنامه..."
              />
            </Col>
            <Col xs={12} className="text-left">
              <Button
                className="px-4 py-2"
                variant="outline-success"
                onClick={sendComment}
              >
                ثبت دیدگاه
              </Button>
            </Col>
          </Row>
        </>
        {/*
          )
          : (
          <>
            <Row>
              <Col className="pb-4">ثبت دیدگاه</Col>
            </Row>
            <Row>
              <Col>
                برای ارسال دیدگاه لازم است، ابتدا
                <Button
                  className="pt-0 border-bottom-0"
                  variant="link"
                  onClick={showLoginModalHandler}
                >
                  وارد سایت
                </Button>
                شوید.
              </Col>
            </Row>
          </>
        )} */}
      </Form>
      <Modal
        size="sm"
        centered
        show={showSuccessModal}
        onHide={hideSuccessModalHandler}
        dir="rtl"
      >
        <Modal.Body as={Form} className="text-center pt-4 mb-1">
          دیدگاه شما با موفقیت ثبت شد
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="50"
            height="50"
            fill="currentColor"
            className="bi bi-check text-success mb-2"
            viewBox="0 0 16 16"
          >
            <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
          </svg>
        </Modal.Body>
        <div className="d-flex pb-4 justify-content-center">
          <Button variant="outline-success" onClick={hideSuccessModalHandler}>
            تایید
          </Button>
        </div>
      </Modal>
      <Login show={showLoginModal} hideHandle={hideLoginModalHandler} />
    </>
  );
};

const mapStateToProps = (state) => ({
  loginedUser: state.loginedUser,
});

export default connect(mapStateToProps)(ApplicationNewComment);
