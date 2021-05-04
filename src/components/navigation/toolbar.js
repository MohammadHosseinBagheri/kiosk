import React, { useState } from "react";
import NavigationItems from "./navigationItems/navigationItems";
import NavLeft from "./navLeft/navLeft";
import DrawerToggle from "./sideDrawer/drawerToggle/drawerToggle";
import { Col, Row } from "react-bootstrap";
import Search from "./search/search";

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
      <div className="position-relative p-0 search d-none d-md-flex align-items-center justify-content-end">
        <Search />
      </div>
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
          className="position-relative p-0 search d-flex align-items-center"
        >
          <Search className='w-100'/>
        </Col>
        <Col xs={2} className="px-0 text-right">
          <DrawerToggle />
        </Col>
      </div>
    </header>
  );
};

export default Toolbar;
