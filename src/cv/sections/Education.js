import React from "react";
import {ColOff} from "../ReactstrapSupport";
import {Container, Col, Row} from "reactstrap";
export default function Education(props) {
  return (
    <div className="my_cv_container">
        <Row>
          <ColOff>2011:</ColOff>
          <Col>
            Faculty of Mathematics and Computer Science of the Jagiellonian
            University:
            <br />
            Master of Science in Computational Mathematics
          </Col>
        </Row>
    </div>
  );
}
