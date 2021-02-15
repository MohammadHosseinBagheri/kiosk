import React from "react";
import SideDrawer from "../components/navigation/sideDrawer/sideDrawer";
import Toolbar from "./../components/navigation/toolbar";

const Layout = () => {
  return (
    <>
      <Toolbar />
      <SideDrawer />
      <main style={{ marginTop: "72px" }}>{porps.children}</main>
    </>
  );
};

export default Layout;
