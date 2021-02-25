import React, { useState } from 'react'
import { Modal, Button, Form, Col } from 'react-bootstrap'
import { connect } from 'react-redux'
import { recieveLoginedUser } from './../../redux/actions'

const LoginContentContainer = props => {
    const { users } = props

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const usernameChangedHandler = event => {
        setUsername(event.target.value)
    }

    const passwordChangedHandler = event => {
        setPassword(event.target.value)
    }

    const loginUser = () => {
        let auth = false
        users.map(user => {
            if (!auth) {
                auth = (username === user.username && password === user.password) ? true : false
                if (auth) {
                    const loginedUser = {
                        username: user.username,
                        password: user.password,
                        gender: user.gender
                    }
                    props.dispatch(recieveLoginedUser(loginedUser))
                    props.hideHandle()
                }
            }

        })
        if (auth) {
        }
    }


    return (
        <Modal
            centered
            show={props.show}
            onHide={props.hideHandle}
            dir='rtl'
        >
            <Modal.Header >
                <Modal.Title >ورود به حساب کاربری</Modal.Title>
            </Modal.Header>

            <Modal.Body as={Form} className='text-right'>
                <Form.Control onChange={usernameChangedHandler} type="text" placeholder="نام کاربری خود را وارد کنید" className='mb-3' />
                <Form.Control onChange={passwordChangedHandler} type="password" placeholder="رمز خود را وارد کنید" />
            </Modal.Body>

            <Modal.Footer>
                <Col xs={12}>
                    <Button onClick={loginUser} variant="primary" className='w-100' style={{ borderRadius: '100px' }}>ورود</Button>
                </Col>
                <Col xs={12} className='text-right'>
                    <span>حساب کاربری ندارید؟</span>
                    <Button variant='link'>ثبت نام</Button>
                </Col>
            </Modal.Footer>
        </Modal>
    )
}

const mapStateToProps = state => ({
    users: state.users
})

export default connect(mapStateToProps)(LoginContentContainer)