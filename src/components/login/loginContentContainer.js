import { Modal, Button, Form } from 'react-bootstrap'

const LoginContentContainer = props => {
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
                <Form.Control type="text" placeholder="نام کاربری خود را وارد کنید" className='mb-3' />
                <Form.Control type="password" placeholder="رمز خود را وارد کنید" />
            </Modal.Body>

            <Modal.Footer>
                <Button variant="primary"  className='w-100' style={{borderRadius: '100px'}}>ورود</Button>
            </Modal.Footer>
        </Modal>
    )
}

export default LoginContentContainer