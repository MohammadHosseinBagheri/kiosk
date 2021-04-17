import React, { useState } from "react";
import NavigationItems from "./navigationItems/navigationItems";
import NavLeft from "./navLeft/navLeft";
import DrawerToggle from "./sideDrawer/drawerToggle/drawerToggle";

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
        <NavigationItems />
      </nav>
      <DrawerToggle />
    </header>
  );
};

export default Toolbar;
