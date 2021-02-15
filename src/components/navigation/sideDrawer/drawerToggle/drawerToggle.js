import { Button } from "react-bootstrap";
import { connect } from 'react-redux'
import { sideDrawerToggle } from './../../../../redux/actions'

const DrawerToggle = (props) => {
  return (
    <Button className='drawerToggle' onClick={() => props.dispatch(sideDrawerToggle())}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="currentColor"
        className="bi bi-justify"
        viewBox="0 0 16 16"
      >
        <path
          fillRule="evenodd"
          d="M2 12.5a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5z"
        />
      </svg>
    </Button>
  );
};

export default connect()(DrawerToggle);
