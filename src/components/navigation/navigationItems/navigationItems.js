import React from 'react'
import { about, home } from '../../../constants'
import NavigationItem from './navigationItem/navigationItem'

const navigationItems = () => {
    return(
        <ul className='navigationItems'>
            <NavigationItem link='/about' >{about}</NavigationItem>
            <NavigationItem link='/' exact>{home}</NavigationItem>
        </ul>
    )
}

export default navigationItems