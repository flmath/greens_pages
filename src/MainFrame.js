import React from 'react';
import { Container, Row, Col } from 'reactstrap';


const Box = props => <div className="box">{props.children} </div>;
/* https://codesandbox.io/s/1439ym99mq?from-embed */
class MainFrame extends React.Component {
  render() {
    return (
      <div>
        <Container fluid="true">
          <Row>
            <Col>
              <Box> .col </Box>
            </Col>
          </Row>

          <Row>
            <Col xs="6">
              <Box> .col-6 </Box>
            </Col>

            <Col xs="6">
              <Box> .col-6 </Box>
            </Col>
          </Row>

          <Row>
            <Col xs="4">
              <Box> .col-4 </Box>
            </Col>

            <Col xs="4">
              <Box> .col-4 </Box>
            </Col>

            <Col xs="4">
              <Box> .col-4 </Box>
            </Col>
          </Row>

          <Row>
            <Col>
              <Box> .col </Box>
            </Col>

            <Col>
              <Box> .col </Box>
            </Col>

            <Col>
              <Box> .col </Box>
            </Col>

            <Col>
              <Box> .col </Box>
            </Col>
          </Row>

          <Row>
            <Col xs="3">
              <Box> .col-3 </Box>
            </Col>

            <Col xs="auto">
              <Box> .col-auto with variable content</Box>
            </Col>

            <Col xs="3">
              <Box> .col-3 </Box>
            </Col>
          </Row>

          <Row>
            <Col sm={{ size: 6, order: 2, offset: 1 }}>
              <Box> .col-sm-6 .col-sm-order-2 .col-sm-offset-2 </Box>{" "}
            </Col>
          </Row>
          <Row>
            <Col sm="12" md={{ size: 8, offset: 2 }}>
              <Box> .col-sm-12 .col-md-6 .col-md-offset-3 </Box>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default MainFrame;
