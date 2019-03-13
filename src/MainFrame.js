import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import CvMain from './cv/CvMain';

const Box = props => <div className="box">{props.children} </div>;
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
        <CvMain></CvMain>
    </Container></div>
      );
    }
  }

export default MainFrame;
