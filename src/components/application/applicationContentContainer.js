import { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { Container, Row, Col, Button } from 'react-bootstrap'
import img from './../../assets/icon/app.png'
import ApplicationComment from './applicationComment'
import male from './../../assets/icon/male.png'
import female from './../../assets/icon/female.png'
import ApplicationNewComment from './applicationNewComment'

const ApplicationContentContainer = props => {

    const [app, setApp] = useState({})
    const [countComment, setCountComment] = useState(4)
    const [isMoreComment, setIsMoreComment] = useState(true)

    const commentsApi = [
        { username: 'علیرضا', feedback: 'عالی عالی نصب کنید', userPhoto: male }, { username: 'محمدحسین', feedback: 'بازی بسیار خوبیه دانلود کنید ممنون از سازندش', userPhoto: male }, { username: 'پریسا', feedback: 'سلام لطفا کنترل با فرمان هم در بازی قرار دهید', userPhoto: female }, { username: 'احمد', feedback: 'خیلی بازی بچگونس', userPhoto: male },
        { username: 'سارا', feedback: 'عالی و پرتقالی🍊🍊', userPhoto: female }, { username: 'ریحانه', feedback: 'بازی بسیار خوبیه دانلود کنید ممنون از سازندش', userPhoto: female }, { username: 'امیر', feedback: 'خوب است بازی', userPhoto: male }, { username: 'مریم', feedback: 'برنامه ی جالبیه خوشم اومد', userPhoto: female },
        { username: 'زینب', feedback: 'نرم افزار عالی هست فقط یکم کند هستش ...', userPhoto: female }, { username: 'امیرعلی', feedback: 'لایک', userPhoto: male }, { username: 'شیوا', feedback: 'خوبه ولی بعضی وقت ها طبلیق میاره و هنگ میکنه', userPhoto: female }, { username: 'ممد', feedback: 'بدک نیس', userPhoto: male },
    ]
    const tenComments = commentsApi.slice(0, countComment)

    const loadMoreComment = () => {
        let moreComment = commentsApi.slice(countComment, countComment + 4)
        tenComments.push(moreComment)
        setCountComment(countComment + 4)
        if (moreComment.length === 0) {
            setIsMoreComment(false)
        }
    }


    useEffect(() => {
        if (Object.keys(props.url).length !== 0) {
            const query = new URLSearchParams(props.url.location.search)
            const product = {}
            for (let param of query.entries()) {
                product[param[0]] = param[1]
            }
            setApp(product)
        }
    }, [props.url])
    return (
        <Container dir='rtl' className='text-right'>
            <Row>
                <Col sm={12} md={7}>
                    <Row className='d-flex justify-content-center'>
                        <Col xs={12} sm={6} className='text-center'>
                            <img style={{ width: '100%', maxWidth: '200px' }} src={img} />
                        </Col>
                        <Col xs={12} sm={6} className='d-flex justify-content-center align-items-center'>
                            <Row className="text-center text-md-right">
                                <Col xs={12} sm={12}><h2 className='font-weight-bold'>{app.name}</h2></Col>
                                <Col xs={12} sm={12}>{app.companyName}</Col>
                                <Col xs={12} sm={12}>نسخه : {app.version}</Col>
                                <Col xs={12} sm={12} className='mt-3 mb-3'><Button variant='success'>افزودن به سبد خرید</Button></Col>
                            </Row>
                        </Col>
                    </Row>
                </Col>
                <Col
                    sm={12}
                    md={5}
                    className='mt-3 mb-3 text-center d-flex align-items-center justify-content-center justify-content-md-end'>
                    <Row>
                        <Col xs={3} sm={3}>
                            <Row className='h-100'>
                                <Col xs={12} sm={12}>{app.installNumber}+</Col>
                                <Col xs={12} sm={12} className='detailApp'>نصب فعال</Col>
                            </Row>
                        </Col>
                        <Col xs={3} sm={3}>
                            <Row className='h-100'>
                                <Col xs={12} sm={12}>{app.rate}</Col>
                                <Col xs={12} sm={12} className='detailApp'>امتیاز</Col>
                            </Row>
                        </Col>
                        <Col xs={3} sm={3}>
                            <Row className='h-100'>
                                <Col xs={12} sm={12}>{app.tag}</Col>
                                <Col xs={12} sm={12} className='detailApp'>دسته</Col>
                            </Row>
                        </Col>
                        <Col xs={3} sm={3}>
                            <Row className='h-100'>
                                <Col xs={12} sm={12}>{app.size} مگابایت</Col>
                                <Col xs={12} sm={12} className='detailApp'>حجم</Col>
                            </Row>
                        </Col>

                    </Row>
                </Col>
            </Row>

            <Row className='mt-5 mb-5 p-3 shadow rounded '>
                <Col sm={12} md={2}>درباره برنامه :</Col>
                <Col>{app.description}</Col>
            </Row>

            <Row className='mt-3'>
                <Col xs={12} className='h4 mb-4'>نظرات کاربران</Col>
                {tenComments.map(comment =>
                    <Col xs={12} md={8} className='border-bottom pb-3 mb-2'><ApplicationComment {...comment} /></Col>
                )}
                <Col xs={12} md={8} className={`text-center ${isMoreComment ? '' : 'd-none'}`}>
                    <Button variant='primary' onClick={loadMoreComment}>کامنت های بیشتر</Button>
                </Col>
            </Row>

            <Row className='my-5'>
                <Col xs={12} md={8}>
                    <ApplicationNewComment />
                </Col>
            </Row>
        </Container>
    )
}

const mapStateToProps = state => ({
    url: state.appUrlParams
})

export default connect(mapStateToProps)(ApplicationContentContainer)