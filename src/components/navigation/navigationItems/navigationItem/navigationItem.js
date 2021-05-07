import React from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { sideDrawerClosed } from "./../../../../redux/actions";

const navigationItem = (props) => {
  const { link, exact, children } = props;
  return (
    <li
      className="navigationItem"
      onClick={() => props.dispatch(sideDrawerClosed())}
    >
      <NavLink to={link} exact={exact}>
        {children}
      </NavLink>
    </li>
  );
};

// const mapStateToProps = state => {
//   sideDrawerClosed
// }

export default connect()(navigationItem);
