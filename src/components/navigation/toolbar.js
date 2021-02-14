import React from 'react'
import NavigationItems from './navigationItems/navigationItems'

const toolbar = () => {
    return (
        <header className='toolbar'>
            <div>
                {/* ورود */}
            </div>
            <nav>
                <NavigationItems />                
            </nav>
        </header>
    )
}

export default toolbar