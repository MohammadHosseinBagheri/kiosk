import { Container, Row, Col, Button } from "react-bootstrap"
import img from './../../assets/icon/app.png'
import {connect} from 'react-redux'
import {removeFromCart} from './../../redux/actions'

const CartProduct = props => {
    const removeProductHandler = () => {
        props.dispatch(removeFromCart(props.product._id))
    }
    return (
        <Row className=' bg-light my-3 rounded'>
            <Col xs={5} sm={3} className='text-center d-flex flex-column justify-content-around align-items-center py-1' >
                <img className='w-100' style={{ 'maxWidth': '150px' }} src={img} />
                <Button onClick={removeProductHandler} variant='danger' className='py-0 d-sm-none'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash" viewBox="0 0 16 16">
                        <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
                        <path fillRule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4L4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z" />
                    </svg>
                    <span>حذف</span>
                </Button>
            </Col>
            <Col xs={6} sm={5} className='d-flex flex-column justify-content-between align-items-start bd-highlight mb-3' >
                <Row className='text-right mt-3' >
                    <Col xs={12} className='h4 pl-0'>{props.product.name}</Col>
                    <Col xs={12} className='pl-0'>{props.product.companyName}</Col>
                    <Col xs={12} className='pl-0'>{props.product.tag}</Col>
                </Row>
                <Row xs={12} >
                    <Col>
                        <Button onClick={removeProductHandler} variant='danger' className='py-0 d-none d-sm-block'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash" viewBox="0 0 16 16">
                                <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
                                <path fillRule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4L4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z" />
                            </svg>
                            <span>حذف</span>
                        </Button>
                        <strong className='d-sm-none' >100 تومن</strong>
                    </Col>
                </Row>
            </Col>
            <Col xs={0} sm={3} className='d-none d-sm-flex justify-content-end align-items-end mb-4'>
                <strong>100 تومن</strong>
            </Col>
        </Row>
    )
}

export default connect()(CartProduct)