import { Container, Row, Col, Button } from "react-bootstrap"
import img from './../../assets/icon/app.png'


const CartProduct = props => {
    return (
        <Row className=' bg-light my-3 rounded'>
            <Col xs={5} sm={3} className='text-center d-flex flex-column justify-content-around align-items-center' >
                <img className='w-100' style={{ 'maxWidth': '150px' }} src={img} />
                <Button variant='danger' className='d-sm-none'>حذف</Button>
            </Col>
            <Col xs={6} sm={6} className='d-flex flex-column justify-content-between align-items-start bd-highlight mb-3' >
                <Row className='text-right mt-3' >
                    <Col xs={12} className='h4'>{props.name}</Col>
                    <Col xs={12}>{props.companyName}</Col>
                    <Col xs={12}>{props.tag}</Col>
                </Row>
                <Row xs={12} >
                    <Col>
                        <Button variant='danger d-none d-sm-block'>حذف از سبد خربد</Button>
                        <strong className='d-sm-none' >100 تومن</strong>
                    </Col>
                </Row>
            </Col>
            <Col xs={0} sm={3} className='d-none d-sm-flex justify-content-end align-items-end mb-4 pl-5'>
                <strong>100 تومن</strong>
            </Col>
        </Row>
    )
}

export default CartProduct