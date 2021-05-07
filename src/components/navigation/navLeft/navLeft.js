import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { logIn } from "./../../../constants";
import { NavLink } from "react-router-dom";
import Login from "./../../account/login";
import { connect } from "react-redux";
import User from "./../../account/userModal";
import { sideDrawerClosed } from "./../../../redux/actions";

const NavLeft = (props) => {
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showUserModal, setShowUserModal] = useState(false);

  const showLoginModalHandler = () => {
    props.dispatch(sideDrawerClosed());
    setShowLoginModal(true);
  };
  const hideLoginModalHandler = () => {
    setShowLoginModal(false);
  };

  const showUserModalHandler = () => {
    props.dispatch(sideDrawerClosed());
    setShowUserModal(true);
  };
  const hideUserModalHandler = () => {
    setShowUserModal(false);
  };

  let isLoginedUser = Object.keys(props.loginedUser).length > 0;

  return (
    <div className={[props.className, "navLeft"].join(" ")}>
      <NavLink to="/cart" className='order-2'> 
        <Button
          variant="success"
          onClick={() => props.dispatch(sideDrawerClosed())}
          className='cartButton'
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-cart4"
            viewBox="0 0 16 16"
          >
            <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l.5 2H5V5H3.14zM6 5v2h2V5H6zm3 0v2h2V5H9zm3 0v2h1.36l.5-2H12zm1.11 3H12v2h.61l.5-2zM11 8H9v2h2V8zM8 8H6v2h2V8zM5 8H3.89l.5 2H5V8zm0 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z" />
          </svg>
        </Button>
      </NavLink>
      {isLoginedUser ? (
        <Button onClick={showUserModalHandler} variant="light" className="ml-0 ml-md-2 mb-2 mb-md-0 order-1">
          {props.loginedUser.username}
        </Button>
      ) : (
        <Button
          onClick={showLoginModalHandler}
          variant="light"
          className="ml-0 ml-md-2 mb-2 mb-md-0 order-1"
        >
          {logIn}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="25"
            fill="currentColor"
            className="bi bi-person"
            viewBox="0 0 16 16"
          >
            <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z" />
          </svg>
        </Button>
      )}
      <Login show={showLoginModal} hideHandle={hideLoginModalHandler} />
      <User show={showUserModal} hideHandle={hideUserModalHandler} />
    </div>
  );
};

const mapStateToProps = (state) => ({
  loginedUser: state.loginedUser,
});

export default connect(mapStateToProps)(NavLeft);
