import React from 'react'
import { Form, Row, Col, Button } from 'react-bootstrap'

const ApplicationNewComment = () => {
    return (
        <Form className='w-100 bg-light pb-5 px-5 pt-2 m-2 text-center shadow-sm rounded'>
            <Row>
                <Col className='text-right pb-4'>دیدگاه ارزشمند خود را وارد کنید</Col>
            </Row>
            <Row>
                <Col xs={12} className='text-right'><Form.Label>نام</Form.Label></Col>
                <Col xs={12}><Form.Control className='mb-3' placeholder="نام خود را وارد کنید..." /></Col>
                <Col xs={12} className='text-right'><Form.Label>متن نظر شما</Form.Label></Col>
                <Col xs={12}><Form.Control className='mb-4' as='textarea' rows={3} placeholder="نظرت در مورد برنامه..." /></Col>
                <Col xs={12}><Button className='px-4 py-2' variant="outline-success" type="submit">ثبت نظر</Button></Col>
            </Row>
        </Form>
    )
}

export default ApplicationNewComment