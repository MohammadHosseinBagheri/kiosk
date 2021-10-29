import { Button } from 'react-bootstrap'
import { connect } from 'react-redux'
import { sideDrawerToggle } from './../../../../redux/actions'

const DrawerToggle = (props) => {
  return (
    <Button
      className="drawerToggle"
      variant="muted"
      onClick={() => props.dispatch(sideDrawerToggle())}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="40"
        height="40"
        fill="currentColor"
        className="bi bi-list"
        viewBox="0 0 16 16"
      >
        <path
          fillRule="evenodd"
          d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
        />
      </svg>
    </Button>
  )
}

export default connect()(DrawerToggle)
