import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import CvNav from './CvNav';



const Box = props => <div className="box">{props.children} </div>;
/* https://codesandbox.io/s/1439ym99mq?from-embed */
class MainFrame extends React.Component {
  constructor(props) {
      super(props);
    }

    render() {
      return (
        <div><Container fluid="true">
        <Row>
            <Col><Box> .col </Box></Col>
        </Row>
        <Row>
        <Col
          xs={{ size: 0, offset: 0 }}
          sm={{ size: 0, offset: 0 }}
          md={{ size: 2, offset: 0 }}
          lg={{ size: 2, offset: 0 }}
          xl={{ size: 2, offset: 0 }}>
          <CvNav></CvNav>
        </Col>
        <Col>
          <Box> .col </Box>
        </Col>
      </Row>
    </Container></div>
      );
    }
  }

export default MainFrame;
