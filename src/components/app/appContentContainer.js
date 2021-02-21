import { useEffect } from 'react'
import { connect } from 'react-redux'

const AppContentContainer = props => {

    useEffect(() => {
        if (Object.keys(props.url).length !== 0) {
            console.log(props.url.location.search)
            const query = new URLSearchParams(props.url.location.search)
            const product = {}
            for (let param of query.entries()) {
                product[param[0]] = param[1]
            }
            console.log(product)
        }
    })

    return <div>App</div>
}

const mapStateToProps = state => ({
    url: state.appUrlParams
})

export default connect(mapStateToProps)(AppContentContainer)