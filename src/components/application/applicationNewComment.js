import React, { useState } from 'react'
import { Form, Row, Col, Button } from 'react-bootstrap'

const ApplicationNewComment = () => {

    const [name, setName] = useState('')
    const [comment, setComment] = useState('')

    const nameChangedHandler = (event) => {
        setName(event.target.value)
    }

    const commentChangedHandler = (event) => {
        setComment(event.target.value)
    }

    return (
        <Form className='w-100 bg-light pb-5 px-5 pt-2 m-2 text-right shadow-sm rounded'>
            <Row>
                <Col className='pb-4'>دیدگاه ارزشمند خود را وارد کنید</Col>
            </Row>
            <Row>
                <Col xs={12}>
                    <Form.Label>نام</Form.Label>
                </Col>
                <Col xs={12}>
                    <Form.Control onChange={nameChangedHandler} className='mb-3' placeholder="نام خود را وارد کنید..." />
                </Col>
                <Col xs={12}>
                    <Form.Label>متن نظر شما</Form.Label>
                </Col>
                <Col xs={12}>
                    <Form.Control onChange={commentChangedHandler} className='mb-4' as='textarea' rows={3} placeholder="نظرت در مورد برنامه..." />
                </Col>
                <Col xs={12} className='text-left'>
                    <Button className='px-4 py-2' variant="outline-success" type="submit">ثبت نظر</Button>
                </Col>
            </Row>
        </Form>
    )
}

export default ApplicationNewComment