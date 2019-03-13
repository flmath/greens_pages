import React from 'react';
import {Row, Col } from 'reactstrap';
import CvNav from './CvNav';
import CvText from './CvText';

class CvMain extends React.Component {
  constructor(props) {
      super(props);
    }
    render() {
      return (
        <div>
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
          <CvText> </CvText>
        </Col>
        </Row>
        </div>
      );
    }
  }

export default CvMain;
