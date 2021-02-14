import Toolbar from './../components/navigation/toolbar'

const layout = (porps) => {
    return (
        <>
            <Toolbar />
            <main style={{marginTop: '72px'}} >{porps.children}</main>
        </>
    )
}

export default layout