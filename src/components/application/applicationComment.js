import { Row, Col } from 'react-bootstrap'

const ApplicationComment = props => {
    return (
        <Row>
            <Col xs={12} sm={12}>{props.username}</Col>
            <Col xs={12} sm={12}>{props.feedback}</Col>
        </Row>
    )
}

export default ApplicationComment