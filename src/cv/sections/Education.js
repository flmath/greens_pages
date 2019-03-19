import React from "react";
import {ColOff} from "./ReactstrapSupport";
import {Container, Col, Row} from "reactstrap";
export default function Education(props) {
  return (
    <div className="personal_container_tint">
      <Container>
        <Row>
          <ColOff>2011:</ColOff>
          <Col>
            Faculty of Mathematics and Computer Science of the Jagiellonian
            University:
            <br />
            Master of Science in Computational Mathematics
          </Col>
        </Row>
      </Container>
    </div>
  );
}
