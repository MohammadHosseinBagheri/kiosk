import { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { Container, Row, Col , Button} from 'react-bootstrap'
import img from './../../assets/icon/app.png'

const ApplicationContentContainer = props => {

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

    return (
        <Container dir='rtl'>
            <Row>
                <Col sm={12} md={6}>
                    <Row className='d-flex justify-content-center'>
                        <Col xs={12} sm={6} className='text-center'>
                            <img style={{ width: '100%', maxWidth: '200px' }} src={img} />
                        </Col>
                        <Col xs={12} sm={6} className='d-flex justify-content-center align-items-center'>
                            <Row className="text-center text-md-right">
                                <Col xs={12} sm={12}>{app.name}</Col>
                                <Col xs={12} sm={12}>{app.companyName}</Col>
                                <Col xs={12} sm={12}>نسخه : {app.version}</Col>
                                <Col xs={12} sm={12} className='mt-3'><Button variant='success'>افزودن به سبد خرید</Button></Col>
                            </Row>
                        </Col>
                    </Row>
                </Col>
                <Col
                    sm={12}
                    md={6}
                    className='mt-3 mb-3 text-center d-flex align-items-center justify-content-center justify-content-md-end'>
                    <Row>
                        <Col>
                            <Row>
                                <Col xs={12} sm={12}>{app.installNumber}+</Col>
                                <Col xs={12} sm={12}>نصب فعال</Col>
                            </Row>
                        </Col>
                        <Col>
                            <Row>
                                <Col xs={12} sm={12}>{app.rate}</Col>
                                <Col xs={12} sm={12}>امتیاز</Col>
                            </Row>
                        </Col>
                        <Col>
                            <Row>
                                <Col xs={12} sm={12}>{app.tag}</Col>
                                <Col xs={12} sm={12}>دسته</Col>
                            </Row>
                        </Col>
                        <Col>
                            <Row>
                                <Col xs={12} sm={12}>{app.size} مگابایت</Col>
                                <Col xs={12} sm={12}>حجم</Col>
                            </Row>
                        </Col>

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

export default connect(mapStateToProps)(ApplicationContentContainer)