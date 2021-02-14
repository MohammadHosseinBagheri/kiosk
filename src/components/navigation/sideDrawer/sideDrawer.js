import NavigationItems from '../navigationItems/navigationItems'
import NavLeft from '../navLeft/navLeft'
import DrawerToggle from './drawerToggle/drawerToggle'

const sideDrawer = () => {
    return(
        <div className='slideDrawer'>
            <DrawerToggle />
            <NavLeft />
            <NavigationItems />
        </div>
    )
}

export default sideDrawer