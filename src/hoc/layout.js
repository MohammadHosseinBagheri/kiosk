import SideDrawer from '../components/navigation/sideDrawer/sideDrawer'
import Toolbar from './../components/navigation/toolbar'

const layout = (porps) => {
    return (
        <>
            <Toolbar />
            <SideDrawer/>
            <main style={{marginTop: '72px'}} >{porps.children}</main>
        </>
    )
}

export default layout