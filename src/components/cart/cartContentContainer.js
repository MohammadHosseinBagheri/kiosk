import { connect } from 'react-redux'
import { Container, Col, Row, Button } from 'react-bootstrap'
import CartProduct from './cartProduct'

const CartContentContainer = props => {
    const { products } = props
    return (
        <>
            <Container dir='rtl'>
                <Row>
                    <Col sm={12} md={8}>
                        {products.map(product => {
                            return <CartProduct {...product} />
                        })}
                    </Col>
                    <Col sm={12} md={4} className=' d-none d-md-block' >
                        <Row className='cartTotalPriceContent bg-light mt-5 mx-1 text-center'>
                            <Col xs={12} className='px-0 border-bottom py-2'>
                                <div>جمع سبد خرید</div>
                            </Col>
                            <Col xs={12} className='px-0 py-2'>
                                <div>375000<span> تومن</span></div>
                            </Col>
                            <Col className='px-0'>
                                <Button block style={{ 'borderRadius': '0' }}>ثبت سفارش</Button>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
            <Container dir='rtl' className='text-center'>
                <Row className='d-unset d-md-none fixed-bottom bg-light border-top shadow py-2' >
                    <Col xs={6}>
                        <div className='mb-1'>جمع سبد خرید</div>
                        <div>375000<span> تومن</span></div>
                    </Col>
                    <Col xs={6} className='d-flex justify-content-center align-items-center'>
                        <Button>ثبت سفارش</Button>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

const mapStateToProps = state => ({
    products: state.cartProducts
})

export default connect(mapStateToProps)(CartContentContainer)