import React from 'react'
import { Modal, Button,Col, Row } from 'react-bootstrap'
import { connect } from 'react-redux'

const UserModal = props => {
    // console.log(props.)
    return (
        <Modal
            show={props.show}
            onHide={props.hideHandle}
            dir='rtl'
        >
            <Modal.Header >
                <Modal.Title >اطلاعات حساب کاربری</Modal.Title>
            </Modal.Header>

            <Modal.Body className='text-right'>
                <Modal.Title as={Row}><Col xs={6} className='text-secondary'>نام کاربری : </Col><Col  xs={6} >{props.loginedUser.username}</Col></Modal.Title>
                <Modal.Title as={Row}><Col xs={6} className='text-secondary'>رمز : </Col><Col  xs={6} >{props.loginedUser.password}</Col></Modal.Title>
                <Modal.Title as={Row}><Col xs={6} className='text-secondary'>جنسیت : </Col><Col  xs={6} >{props.loginedUser.gender === 'male' ? 'مرد' : 'زن'}</Col></Modal.Title>
            </Modal.Body>

            <Modal.Footer>
                <Col xs={12}>
                    <Button variant="danger" className='w-100' style={{ borderRadius: '100px' }}>خروج</Button>
                </Col>
            </Modal.Footer>
        </Modal>
    )
}

const mapStateToProps = state => ({
    loginedUser: state.loginedUser
})

export default connect(mapStateToProps)(UserModal)