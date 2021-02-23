import { Row, Col } from 'react-bootstrap'

const ApplicationComment = props => {
    return (
        <Row>
            <Col xs={12} sm={12}>
                <Row>
                    <Col xs={12} className='rounded-circle w-100 mb-2 d-flex align-items-center'>
                        <img src={props.userPhoto} style={{width: '50px'}} />
                        <span className='mr-2 text-info'>{props.username}</span>
                    </Col>
                </Row>
            </Col>
            <Col xs={12} sm={12}>{props.feedback}</Col>
        </Row>
    )
}

export default ApplicationComment