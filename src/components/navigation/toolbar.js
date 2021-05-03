import React, { useState } from "react";
import NavigationItems from "./navigationItems/navigationItems";
import NavLeft from "./navLeft/navLeft";
import DrawerToggle from "./sideDrawer/drawerToggle/drawerToggle";
import img from "./../../assets/icon/xbox1.png";
import { Col, Row } from "react-bootstrap";

const Toolbar = () => {
  const [fixToolbar, setFixToolbar] = useState(false);

  window.onscroll = () => {
    if (window.pageYOffset >= 50) {
      setFixToolbar(true);
    } else {
      setFixToolbar(false);
    }
  };
  return (
    <header className={`${fixToolbar ? "sticky" : ""} toolbar`}>
      <div className="desktopOnly">
        <NavLeft />
      </div>
      <nav className="desktopOnly">
        <Row>
          <Col className="position-relative p-0 search d-flex align-items-center">
            <input className="search-text" type="text" placeholder="جستجو" />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              fill="currentColor"
              className="bi bi-search icon-search"
              viewBox="0 0 16 16"
            >
              <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
            </svg>
          </Col>
          <Col>
            <NavigationItems />
          </Col>
          <Col>
            <img src={img} />
          </Col>
        </Row>
      </nav>
      <div className="d-flex d-sm-none justify-content-between w-100">
        <img src={img} />
        <DrawerToggle />
      </div>
    </header>
  );
};

export default Toolbar;
