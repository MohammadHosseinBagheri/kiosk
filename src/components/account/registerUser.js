import React, { useState } from 'react'
import { Modal, Button, Form, Col } from 'react-bootstrap'
import { connect } from 'react-redux'
import { addUser, recieveLoginedUser } from './../../redux/actions'
import axios from 'axios'

const RegisterUser = (props) => {
  const [name, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [email, setEmali] = useState('')

  const usernameChangedHandler = (event) => {
    setUsername(event.target.value)
  }

  const passwordChangedHandler = (event) => {
    setPassword(event.target.value)
  }

  const emailChangedHandler = (event) => {
    setEmali(event.target.value)
  }

  const sendNewUser = () => {
    // post data
    const user = { email, password, name }
    axios
      .post('https://still-headland-88471.herokuapp.com/api/signup', user)
      .then((res) => {
        const loginedUser = {
          email: res.data.email,
          password: res.data.password,
          name: res.data.name,
          id: res.data._id,
        }
        props.dispatch(recieveLoginedUser(loginedUser))
        props.hideRegisterModal()
      })
      .catch((err) => console.log(err))
  }

  return (
    <Modal
      show={!props.registered}
      onHide={props.hideRegisterModal}
      dir="rtl"
      centered
    >
      <Modal.Header>
        <Modal.Title>ثبت نام</Modal.Title>
      </Modal.Header>

      <Modal.Body as={Form} className="text-right">
        <Form.Control
          onChange={usernameChangedHandler}
          type="text"
          placeholder="نام خود را وارد کنید"
          className="mb-3"
        />
        <Form.Control
          required
          onChange={emailChangedHandler}
          type="email"
          placeholder="ایمیل خود را وارد کنید"
          className="mb-3"
        />
        <Form.Control
          onChange={passwordChangedHandler}
          type="password"
          placeholder="رمز خود را وارد کنید"
        />
      </Modal.Body>

      <Modal.Footer>
        <Col xs={12}>
          <Button
            onClick={sendNewUser}
            variant="primary"
            className="w-100"
            style={{ borderRadius: '100px' }}
          >
            ثبت نام
          </Button>
        </Col>
      </Modal.Footer>
    </Modal>
  )
}

export default connect()(RegisterUser)
