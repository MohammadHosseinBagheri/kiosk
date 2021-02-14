import React, { useState } from "react";
import SideDrawer from "../components/navigation/sideDrawer/sideDrawer";
import Toolbar from "./../components/navigation/toolbar";

const Layout = (porps) => {
  const [showSideDrawer, setShowSideDrawer] = useState(false);

  const sideDrawerClosedHandler = () => {
    setShowSideDrawer(false);
  };

  return (
    <>
      <Toolbar />
      <SideDrawer closed={sideDrawerClosedHandler} open={showSideDrawer} />
      <main style={{ marginTop: "72px" }}>{porps.children}</main>
    </>
  );
};

export default Layout;
