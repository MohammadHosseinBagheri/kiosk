import { Container, Row, Col, Button } from "react-bootstrap"

const CartProduct = props => {
    console.log(props)
    return (
        <Container>
            <Row>
                <Col>
                    {props.name}
                </Col>
            </Row>
        </Container>
    )
}

export default CartProduct