import React from 'react'
import { about, home } from '../../../constants'
import NavigationItem from './navigationItem/navigationItem'

const navigationItems = () => {
    return(
        <ul className='navigationItems'>
            <NavigationItem link='/' exact>{home}</NavigationItem>
            <NavigationItem link='/about' >{about}</NavigationItem>
        </ul>
    )
}

export default navigationItems