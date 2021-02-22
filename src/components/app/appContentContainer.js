import { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { Container, Row, Col } from 'react-bootstrap'

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
        <Container dir='rtl'>
            <Row>
                <Col sm={12} md={6}>
                    <Row>
                        <Col xs={12} sm={6}>icon</Col>
                        <Col xs={12} sm={6}>
                            <Row className="text-sm-center text-md-right">
                                <Col xs={12} sm={12}>name</Col>
                                <Col xs={12} sm={12}>company</Col>
                                <Col xs={12} sm={12}>version</Col>
                                <Col xs={12} sm={12}>add to cart</Col>
                            </Row>
                        </Col>
                    </Row>
                </Col>
                <Col sm={12} md={6} className='d-flex align-items-center justify-content-end'>
                    <Row>
                        <Col>rate</Col>
                        <Col>categori</Col>
                        <Col>install no</Col>
                        <Col>size</Col>
                    </Row>
                </Col>
            </Row>
            <Row>
                <Col>description</Col>
            </Row>
            <Row>
                <Col>comment</Col>
            </Row>
        </Container>
    )
}

const mapStateToProps = state => ({
    url: state.appUrlParams
})

export default connect(mapStateToProps)(AppContentContainer)