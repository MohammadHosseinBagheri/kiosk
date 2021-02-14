import React from 'react'
import NavigationItems from './navigationItems/navigationItems'
import NavLeft from './navLeft/navLeft'
import DrawerToggle from './sideDrawer/drawerToggle/drawerToggle'

const toolbar = () => {
    return (
        <header className='toolbar'>
            <DrawerToggle />
            <NavLeft />
            <nav>
                <NavigationItems />
            </nav>
        </header>
    )
}

export default toolbar