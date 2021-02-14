import React from "react";
import NavigationItems from "./navigationItems/navigationItems";
import NavLeft from "./navLeft/navLeft";
import DrawerToggle from "./sideDrawer/drawerToggle/drawerToggle";

const toolbar = (props) => {
  return (
    <header className="toolbar">
      <DrawerToggle clicked={props.drawerToggleClicked} />
      <NavLeft className="desktopOnly" />
      <nav className="desktopOnly">
        <NavigationItems />
      </nav>
    </header>
  );
};

export default toolbar;
