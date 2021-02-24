import React, { useState } from 'react'
import { Form, Row, Col, Button } from 'react-bootstrap'
import { connect } from 'react-redux'
import { addComments } from './../../redux/actions'

const ApplicationNewComment = props => {

    const [username, setUsername] = useState('')
    const [comment, setComment] = useState('')
    const [gender, setGender] = useState('')

    const nameChangedHandler = (event) => {
        setUsername(event.target.value)
    }

    const commentChangedHandler = (event) => {
        setComment(event.target.value)
    }

    const checkChangedHandler = event => {
        setGender(event.target.id)
    }


    const sendComment = () => {
        // post data
        const comment1 = {
            username, comment, gender
        }
        props.dispatch(addComments(comment1))
    }


    return (
        <Form className='w-100 bg-light pb-5 px-5 pt-2 my-2 text-right shadow-sm rounded'>
            <Row>
                <Col className='pb-4'>دیدگاه</Col>
            </Row>
            <Row>
                <Col xs={12}>
                    <Form.Control onChange={nameChangedHandler} className='mb-3' placeholder="نام خود را وارد کنید..." />
                <Col xs={12}>
                </Col>
                    <Form.Control onChange={commentChangedHandler} className='mb-4' as='textarea' rows={3} placeholder="نظرت در مورد برنامه..." />
                </Col>
                <Col className='d-flex radio'>
                    <Form.Check className='' onClick={checkChangedHandler} name='gender' id='male' label='آقا' type='radio' />
                    <Form.Check className='' onClick={checkChangedHandler} name='gender' id='female' label='خانم' type='radio' />
                </Col>
                <Col xs={12} className='text-left'>
                    <Button className='px-4 py-2' variant="outline-success" onClick={sendComment}>ثبت دیدگاه</Button>
                </Col>
            </Row>
        </Form>
    )
}

export default connect()(ApplicationNewComment)