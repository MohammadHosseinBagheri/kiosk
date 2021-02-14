import React from "react";
import NavigationItems from "./navigationItems/navigationItems";
import NavLeft from "./navLeft/navLeft";
import DrawerToggle from "./sideDrawer/drawerToggle/drawerToggle";

const toolbar = (props) => {
  return (
    <header className="toolbar">
      <div className="desktopOnly">
        <NavLeft />
      </div>
      <nav className="desktopOnly">
        <NavigationItems />
      </nav>
      <DrawerToggle clicked={props.drawerToggleClicked} />
    </header>
  );
};

export default toolbar;
