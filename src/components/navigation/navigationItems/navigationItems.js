import React from 'react'
import { home } from '../../../constants'
import NavigationItem from './navigationItem/navigationItem'

const navigationItems = () => {
    return(
        <ul>
            <NavigationItem link='/'>{home}</NavigationItem>
        </ul>
    )
}

export default navigationItems