import { useEffect, useState } from 'react'
import { connect } from 'react-redux'

const AppContentContainer = props => {

    const [app, setApp] = useState({})

    useEffect(() => {
        if (Object.keys(props.url).length !== 0) {
            console.log(props.url.location.search)
            const query = new URLSearchParams(props.url.location.search)
            const product = {}
            for (let param of query.entries()) {
                product[param[0]] = param[1]
            }
            setApp(product)
        }
    }, [props.url])

    let info = Object.keys(app)
        .map(key => <div key={key}>{key} : {app[key]}</div>)

    return (
        <div>
            {info}
        </div>
    )
}

const mapStateToProps = state => ({
    url: state.appUrlParams
})

export default connect(mapStateToProps)(AppContentContainer)