import { Container, Row, Col, Button } from "react-bootstrap"
import img from './../../assets/icon/app.png'


const CartProduct = props => {
    console.log(props)
    return (
        <Row className=' bg-light my-3 rounded'>
            <Col xs={12} sm={3} className='text-center' >
                <img className='w-100' style={{ 'maxWidth': '200px' }} src={img} />
            </Col>
            <Col xs={6} sm={6} className='d-flex flex-column justify-content-between align-items-start bd-highlight mb-3' >
                <Row className='text-right mt-3' >
                    <Col xs={12} className='h4'>{props.name}</Col>
                    <Col xs={12}>{props.companyName}</Col>
                    <Col xs={12}>{props.tag}</Col>
                </Row>
                <Row xs={12}>
                    <Col>
                        <Button variant='danger'>حذف از سبد خربد</Button>
                    </Col>
                </Row>
            </Col>
            <Col xs={6} sm={3} className='d-flex justify-content-end align-items-end mb-4 pl-5'>
                <strong>100 تومن</strong>
            </Col>
        </Row>
    )
}

export default CartProduct