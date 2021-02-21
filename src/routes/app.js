import {useEffect} from 'react'
import AppContainer from './../containers/appContainer'
import {appUrlParams} from './../redux/actions'
import {connect} from 'react-redux'
const App = props => {
    const urlParams = { history: props.history, match: props.match, location: props.location }
    useEffect(() => {
        props.dispatch(appUrlParams(urlParams))
    })
    return <AppContainer />
}

export default connect()(App)

