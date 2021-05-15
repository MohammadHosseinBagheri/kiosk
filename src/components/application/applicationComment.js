import { Row, Col } from "react-bootstrap";
import male from "./../../assets/icon/male.png";
// import female from './../../assets/icon/female.png'

const ApplicationComment = (props) => {
  return (
    <Row>
      <Col xs={12} sm={12}>
        <Row>
          <Col
            xs={12}
            className="rounded-circle w-100 mb-2 d-flex align-items-center"
          >
            <img src={male} style={{ width: "50px" }} />
            <span className="mr-2 text-info">{props.name}</span>
          </Col>
        </Row>
      </Col>
      <Col xs={12} sm={12}>
        {props.text}
      </Col>
    </Row>
  );
};

export default ApplicationComment;
