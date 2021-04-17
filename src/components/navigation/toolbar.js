import React, { useState } from "react";
import NavigationItems from "./navigationItems/navigationItems";
import NavLeft from "./navLeft/navLeft";
import DrawerToggle from "./sideDrawer/drawerToggle/drawerToggle";
import img from './../../assets/icon/xbox1.png'
import { Col, Row } from 'react-bootstrap'

const Toolbar = () => {

  const [fixToolbar, setFixToolbar] = useState(false)

  window.onscroll = () => {
    if (window.pageYOffset >= 50) {
      setFixToolbar(true)
    } else {
      setFixToolbar(false)
    }
  }
  return (
    <header className={`${fixToolbar ? 'sticky' : ''} toolbar`}>
      <div className="desktopOnly">
        <NavLeft />
      </div>
      <nav className="desktopOnly">
        <Row>
          <Col>
            <NavigationItems />
          </Col>
          <Col>
            <img src={img} />
          </Col>
        </Row>
      </nav>
      <div className='d-flex d-sm-none justify-content-between w-100'>
        <img src={img} />
        <DrawerToggle />
      </div>
    </header>
  );
};

export default Toolbar;
