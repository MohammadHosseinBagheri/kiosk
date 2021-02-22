import { useEffect } from 'react'
import ApplicationContainer from './../containers/applicationContainer'
import { appUrlParams } from './../redux/actions'
import { connect } from 'react-redux'

const Application = props => {
    const urlParams = { history: props.history, match: props.match, location: props.location }
    useEffect(() => {
        props.dispatch(appUrlParams(urlParams))
    })
    return <ApplicationContainer />
}

export default connect()(Application)

