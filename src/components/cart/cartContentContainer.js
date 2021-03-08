import { connect } from 'react-redux'
import { Container, Col, Row } from 'react-bootstrap'
import CartProduct from './cartProduct'

const CartContentContainer = props => {
    const { products } = props
    console.log(products)
    return (
        <Container dir='rtl'>
            <Row>
                <Col sm={12} md={9}>
                    {products.map(product => {
                        return <CartProduct {...product} />
                    })}
                </Col>
                <Col sm={12} md={3}>
                    <div
                        className='cartTotalPrice '>
                        <Col xs={12} className='my-5'>
                            <div>مجموع سبد خرید</div>
                        </Col>
                        <Col xs={12} className='my-5'>
                            <div>یک میلیون تومن</div>
                        </Col>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

const mapStateToProps = state => ({
    products: state.cartProducts
})

export default connect(mapStateToProps)(CartContentContainer)