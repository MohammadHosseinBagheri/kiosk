import NavigationItems from "../navigationItems/navigationItems";
import NavLeft from "../navLeft/navLeft";
import Backdrop from "./../../ui/backdrop";
import { connect } from 'react-redux'
import { sideDrawerClosed } from './../../../redux/actions'

const sideDrawer = (props) => {

  const { showsideDrawer, dispatch } = props

  let attachedClass = "sideDrawerClose";
  if (showsideDrawer) {
    attachedClass = "sideDrawerOpen";
  } else {
    attachedClass = "sideDrawerClose";
  }

  return (
    <>
      <Backdrop show={showsideDrawer} hide={() => dispatch(sideDrawerClosed())} />
      <div className={`sideDrawer ${attachedClass}`}>
        <NavLeft />
        <NavigationItems />
      </div>
    </>
  );
};

const mapStateToProps = state => ({
  showsideDrawer: state.showsideDrawer
})

export default connect(mapStateToProps)(sideDrawer);
