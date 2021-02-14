import NavigationItems from '../navigationItems/navigationItems'
import NavLeft from '../navLeft/navLeft'
import DrawerToggle from './drawerToggle/drawerToggle'

const sideDrawer = (props) => {
    
    let attachedClasse =  "sideDrawerClose"
    if (props.open) {
        attachedClasse = "sideDrawerOpen"
    } else {
        attachedClasse = "sideDrawerClose"
    }
    
    return(
        <div className={`sideDrawer ${attachedClasse}`}>
            <DrawerToggle />
            <NavLeft />
            <NavigationItems />
        </div>
    )
}

export default sideDrawer