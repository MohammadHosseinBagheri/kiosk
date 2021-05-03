import React, { useState } from "react";
import NavigationItems from "./navigationItems/navigationItems";
import NavLeft from "./navLeft/navLeft";
import DrawerToggle from "./sideDrawer/drawerToggle/drawerToggle";
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
      <Col className="position-relative p-0 search d-none d-md-flex align-items-center justify-content-end">
        <input className="search-text " type="text" placeholder="جستجو" />
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
      <nav className="desktopOnly">
        <Row>
          <Col className="pr-0">
            <NavigationItems />
          </Col>
          <Col className="site-icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="50"
              height="50"
              fill="currentColor"
              class="bi bi-dice-3-fill"
              viewBox="0 0 16 16"
            >
              <path d="M3 0a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V3a3 3 0 0 0-3-3H3zm2.5 4a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm8 8a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zM8 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z" />
            </svg>
          </Col>
        </Row>
      </nav>
      <div className="d-flex d-md-none justify-content-between w-100">
        <Col xs={2} className="site-icon px-0">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="50"
            height="50"
            fill="currentColor"
            class="bi bi-dice-3-fill"
            viewBox="0 0 16 16"
          >
            <path d="M3 0a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V3a3 3 0 0 0-3-3H3zm2.5 4a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm8 8a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zM8 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z" />
          </svg>
        </Col>
        <Col
          xs={8}
          className="position-relative p-0 search d-flex align-items-center pl-4"
        >
          <input
            className="search-text w-100"
            type="text"
            placeholder="جستجو"
          />
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
        <Col xs={2} className="px-0 text-right">
          <DrawerToggle />
        </Col>
      </div>
    </header>
  );
};

export default Toolbar;
