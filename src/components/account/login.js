import React, { useState } from 'react'
import { Modal, Button, Form, Col } from 'react-bootstrap'
import { connect } from 'react-redux'
import { recieveLoginedUser } from './../../redux/actions'
import RegisterUser from './registerUser'
import axios from 'axios'

const LoginContentContainer = (props) => {
  // const { users } = props;
  // console.log(users);

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [registered, setRegistered] = useState(true)

  const emailChangedHandler = (event) => {
    setEmail(event.target.value)
  }

  const passwordChangedHandler = (event) => {
    setPassword(event.target.value)
  }

  const loginUser = () => {
    const user = { email, password }
    axios
      .post('https://still-headland-88471.herokuapp.com/api/signin', user)
      .then((res) => {
        const loginedUser = {
          email: res.data.email,
          password: res.data.password,
          name: res.data.name,
          id: res.data._id,
        }
        props.dispatch(recieveLoginedUser(loginedUser))
        props.hideHandle()
      })
      .catch((err) => console.log(err))

    // let auth = false;
    // users.map((user) => {
    //   if (!auth) {
    //     auth =
    //       email === user.email && password === user.password ? true : false;
    //     if (auth) {
    //       const loginedUser = {
    //         name: user.name,
    //         password: user.password,
    //         email: user.email,
    //         id: user.id,
    //       };
    //       props.dispatch(recieveLoginedUser(loginedUser));
    //       props.hideHandle();
    //     }
    //   }
    // });
    // if (auth) {
    // }
  }

  // const registerUser = () => {
  //   props.hideHandle()
  //   setRegistered(false)
  // }

  const hideRegisterModal = () => {
    setRegistered(true)
  }

  return (
    <>
      <Modal centered show={props.show} onHide={props.hideHandle} dir="rtl">
        <Modal.Header>
          <Modal.Title>ورود به حساب کاربری</Modal.Title>
        </Modal.Header>

        <Modal.Body as={Form} className="text-right">
          <Form.Control
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
              onClick={loginUser}
              variant="primary"
              className="w-100"
              style={{ borderRadius: '100px' }}
            >
              ورود
            </Button>
          </Col>
          <Col xs={12} className="text-right">
            <span>حساب کاربری ندارید؟</span>
            {/* <Button onClick={registerUser} variant="link"> */}
            <Button variant="link">ثبت نام</Button>
          </Col>
        </Modal.Footer>
      </Modal>
      <RegisterUser
        registered={registered}
        hideRegisterModal={hideRegisterModal}
      />
    </>
  )
}

const mapStateToProps = (state) => ({
  users: state.users,
})

export default connect(mapStateToProps)(LoginContentContainer)
