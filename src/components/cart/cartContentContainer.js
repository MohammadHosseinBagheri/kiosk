import { connect } from 'react-redux'
import { Container, Col, Row } from 'react-bootstrap'


const CartContentContainer = props => {
    const { products } = props
    return (
        <Container>
            <Row>
                {products.map(product => <Col key={product._id}></Col>)}
            </Row>
        </Container>
    )
}

const mapStateToProps = state => ({
    products: state.cartProducts
})

export default connect(mapStateToProps)(CartContentContainer)