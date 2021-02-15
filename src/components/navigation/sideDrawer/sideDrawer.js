import NavigationItems from "../navigationItems/navigationItems";
import NavLeft from "../navLeft/navLeft";
import Backdrop from "./../../ui/backdrop";

const sideDrawer = (props) => {
  let attachedClass = "sideDrawerClose";
  if () {
    attachedClass = "sideDrawerOpen";
  } else {
    attachedClass = "sideDrawerClose";
  }

  return (
    <>
      <Backdrop show={ } hide={ } />
      <div className={`sideDrawer ${attachedClass}`}>
        <NavLeft />
        <NavigationItems />
      </div>
    </>
  );
};

export default sideDrawer;
