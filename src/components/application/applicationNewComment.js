import React, { useState } from 'react'
import { Form, Row, Col, Button, Modal } from 'react-bootstrap'
import { connect } from 'react-redux'
import { addComments } from './../../redux/actions'
import Login from './../account/login'

const ApplicationNewComment = props => {

    const { loginedUser } = props

    const [username, setUsername] = useState('')
    const [comment, setComment] = useState('')
    const [showSuccessModal, setShowSuccessModal] = useState(false)
    const [showLoginModal, setShowLoginModal] = useState(false)

    const showLoginModalHandler = () => {
        setShowLoginModal(true)
    }
    const hideLoginModalHandler = () => {
        setShowLoginModal(false)
    }

    const nameChangedHandler = (event) => {
        setUsername(event.target.value)
    }

    const commentChangedHandler = (event) => {
        setComment(event.target.value)
    }

    const sendComment = () => {
        // post data
        setShowSuccessModal(true)
        const comment1 = {
            username: loginedUser.username,
            gender: loginedUser.gender,
            comment
        }
        props.dispatch(addComments(comment1))
    }

    const hideSuccessModalHandler = () => {
        setShowSuccessModal(false)
    }

    let isLoginedUser = Object.keys(props.loginedUser).length > 0

    return (
        <>
            <Form className='w-100 bg-light pb-5 px-5 pt-2 my-2 text-right shadow-sm rounded'>
                {
                    isLoginedUser ?
                        <>
                            <Row>
                                <Col className='pb-4'>دیدگاه</Col>
                            </Row>
                            <Row>
                                <Col xs={12}>
                                    <Form.Control onChange={nameChangedHandler} className='mb-3' placeholder="نام خود را وارد کنید..." value={loginedUser.username} />
                                    <Col xs={12}>
                                    </Col>
                                    <Form.Control onChange={commentChangedHandler} className='mb-4' as='textarea' rows={3} placeholder="نظرت در مورد برنامه..." />
                                </Col>
                                <Col xs={12} className='text-left'>
                                    <Button className='px-4 py-2' variant="outline-success" onClick={sendComment}>ثبت دیدگاه</Button>
                                </Col>
                            </Row>
                        </> :
                        <>
                            <Row>
                                <Col className='pb-4'>ثبت دیدگاه</Col>
                            </Row>
                            <Row>
                                <Col>برای ارسال دیدگاه لازم است، ابتدا
                                <Button variant='link' onClick={showLoginModalHandler}>وارد سایت</Button>
                                 شوید.</Col>
                            </Row>
                        </>
                }
            </Form>
            <Modal
                size='sm'
                centered
                show={showSuccessModal}
                onHide={hideSuccessModalHandler}
                dir='rtl'
            >
                <Modal.Body as={Form} className='text-center pt-4 mb-1 text-success'>
                    دیدگاه شما با موفقیت ثبت شد
               </Modal.Body>
                <div className='d-flex pb-4 justify-content-center'>
                    <Button variant='outline-success' onClick={hideSuccessModalHandler}>تایید</Button>
                </div>
            </Modal>
            <Login show={showLoginModal} hideHandle={hideLoginModalHandler} />
        </>
    )
}

const mapStateToProps = state => ({
    loginedUser: state.loginedUser
})

export default connect(mapStateToProps)(ApplicationNewComment)