import { connect } from 'react-redux'
import { Container, Col, Row } from 'react-bootstrap'
import CartProduct from './cartProduct'

const CartContentContainer = props => {
    console.log(props)
    const { products } = props
    return (
        <Container>
            <Row>
                {products.map(product => {
                    <Col>
                        <CartProduct {...product} />
                    </Col>
                })}
            </Row>
        </Container>
    )
}

const mapStateToProps = state => ({
    products: state.cartProducts
})

export default connect(mapStateToProps)(CartContentContainer)