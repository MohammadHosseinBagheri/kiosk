import NavigationItems from "../navigationItems/navigationItems";
import NavLeft from "../navLeft/navLeft";

const sideDrawer = (props) => {
  let attachedClass = "sideDrawerClose";
  if (props.open) {
    attachedClass = "sideDrawerOpen";
  } else {
    attachedClass = "sideDrawerClose";
  }

  return (
    <div className={`sideDrawer ${attachedClass}`}>
      <NavLeft />
      <NavigationItems />
    </div>
  );
};

export default sideDrawer;
