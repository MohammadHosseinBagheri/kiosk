import React from 'react'
import NavigationItems from './navigationItems/navigationItems'
import NavLeft from './navLeft/navLeft'

const toolbar = () => {
    return (
        <header className='toolbar'>
            <NavLeft />
            <nav>
                <NavigationItems />
            </nav>
        </header>
    )
}

export default toolbar