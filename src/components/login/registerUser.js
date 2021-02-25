import React, { useState } from 'react'
import { Modal, Button, Form, Col } from 'react-bootstrap'


const RegisterUser = props => {
    
    
    
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [gender, setGender] = useState('')

    const usernameChangedHandler = event => {
        setUsername(event.target.value)
    }

    const passwordChangedHandler = event => {
        setPassword(event.target.value)
    }

    const genderChangedHandler = event => {
        setGender(event.target.id)
    }

    
    
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
                <Form.Control onChange={usernameChangedHandler} type="text" placeholder="نام کاربری" className='mb-3' />
                <Form.Control onChange={passwordChangedHandler} type="password" placeholder="رمز" />
                <Col className='d-flex genderCheck'>
                    <Form.Check onChange={genderChangedHandler} name='gender' id='male' type='radio' label='آقا' />
                    <Form.Check onChange={genderChangedHandler} name='gender' id='male' type='radio' label='خانم' />
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
