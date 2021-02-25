import React, { useState } from 'react'
import { Modal, Button, Form, Col } from 'react-bootstrap'


const RegisterUser = props => {
    return (
        <Modal
            show={!props.registered}
            onHide={props.hideRegisterModal}
            dir='rtl'
        >
            <Modal.Header >
                <Modal.Title >ثبت نام</Modal.Title>
            </Modal.Header>

            <Modal.Body as={Form} className='text-right'>
                <Form.Control type="text" placeholder="نام کاربری" className='mb-3' />
                <Form.Control type="password" placeholder="رمز" />
                <Col className='d-flex'>
                    <Form.Check name='gender' id='male' type='radio' label='آقا' />
                    <Form.Check name='gender' id='male' type='radio' label='خانم' />
                </Col>
            </Modal.Body>

            <Modal.Footer>
                <Col xs={12}>
                    <Button variant="primary" className='w-100' style={{ borderRadius: '100px' }}>ثبت نام</Button>
                </Col>
            </Modal.Footer>
        </Modal>
    )
}

export default RegisterUser
