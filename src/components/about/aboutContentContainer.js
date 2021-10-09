import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import DiceIcons from "./../diceIcons/diceIcons";


const AboutContentContainer = () => {
  return (
    <Container className="about text-center position-relative">
      <div
        dir="rtl"
        className="position-absolute about-us flex-column text-dark pr-3"
      >
        <Row className="m-0">
          <h3>درباره ما</h3>
        </Row>
        <Row className="m-0">
          <p>با ما به تمام برنامه های دنیا دسترسی داشته باشید :)</p>
        </Row>
      </div>
      <DiceIcons />
    </Container>
  );
};

export default AboutContentContainer;
