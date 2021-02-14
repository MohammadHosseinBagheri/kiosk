import React from 'react'
import { home } from '../../../constants'
import NavigationItem from './navigationItem/navigationItem'

const navigationItems = () => {
    return(
        <ul className='navigationItems'>
            <NavigationItem link='/' exact>{home}</NavigationItem>
        </ul>
    )
}

export default navigationItems