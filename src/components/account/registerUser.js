import React, { useState } from 'react'
import { Modal, Button, Form, Col } from 'react-bootstrap'
import {connect} from 'react-redux'
import {addUser, recieveLoginedUser} from './../../redux/actions'

const RegisterUser = props => {
    
    
    
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [gender, setGender] = useState('')

    const usernameChangedHandler = event => {
        setUsername(event.target.value)
        console.log(event.target.value)

    }

    const passwordChangedHandler = event => {
        setPassword(event.target.value)
        console.log(event.target.value)
    }

    const genderChangedHandler = event => {
        setGender(event.target.id)
        console.log(event.target.id)
    }

    const sendNewUser = () => {
        // post data
        const user = {
            username,
            password,
            gender
        }
        props.dispatch(addUser(user))
        props.dispatch(recieveLoginedUser(user))
        props.hideRegisterModal()
    }

    
    
    return (
        <Modal
            show={!props.registered}
            onHide={props.hideRegisterModal}
            dir='rtl'
            centered
        >
            <Modal.Header >
                <Modal.Title >ثبت نام</Modal.Title>
            </Modal.Header>

            <Modal.Body as={Form} className='text-right'>
                <Form.Control onChange={usernameChangedHandler} type="text" placeholder="نام کاربری" className='mb-3' />
                <Form.Control onChange={passwordChangedHandler} type="password" placeholder="رمز" />
                <Col className='d-flex genderCheck'>
                    <Form.Check onChange={genderChangedHandler} name='gender' id='male' type='radio' label='آقا' />
                    <Form.Check onChange={genderChangedHandler} name='gender' id='female' type='radio' label='خانم' />
                </Col>
            </Modal.Body>

            <Modal.Footer>
                <Col xs={12}>
                    <Button onClick={sendNewUser} variant="primary" className='w-100' style={{ borderRadius: '100px' }}>ثبت نام</Button>
                </Col>
            </Modal.Footer>
        </Modal>
    )
}

export default connect()(RegisterUser)
