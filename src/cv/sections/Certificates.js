import React from "react";
import {ColOff} from "./ReactstrapSupport";
import {Container, Col, Row} from "reactstrap";

export default function Certicicates(props) {
  return (
    <div className="personal_container_tint">
      <Container>
        <Row>
          <ColOff>2017:</ColOff>
          <Col>
            <a href="includes/certs/machinelearning.pdf">
              Coursera online certificate: Machine Learning
            </a>
          </Col>
        </Row>
        <Row>
          <ColOff>2014:</ColOff>

          <Col>
            <a href="includes/certs/modelthinking.pdf">
              Coursera online certificate: Model Thinking
            </a>
          </Col>
        </Row>
        <Row>
          <ColOff>2013:</ColOff>
          <Col>
            <a href="includes/certs/comnet.pdf">
              Coursera online certificate: Computer Networks
            </a>
          </Col>
        </Row>
        <Row>
          <ColOff>2013:</ColOff>
          <Col>
            <a href="includes/certs/ustats.pdf">
              Udacity online certificate: Statistic
            </a>
          </Col>
        </Row>
        <Row>
          <ColOff>2012:</ColOff>
          <Col>
            <a href="includes/certs/erlang.pdf">
              Erlang Solution: Foundation Certificate
            </a>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
