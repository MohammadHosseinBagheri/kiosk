import React from 'react'
import { NavLink } from 'react-router-dom'

const navigationItem = (props) => {
    const { link, exact, children } = props
    return (
        <li>
            <NavLink
                to={link}
                exact={exact}
            >{children}</NavLink>
        </li>
    )
}

export default navigationItem