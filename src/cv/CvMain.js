import React from 'react';
import {Container, Row, Col } from 'reactstrap';

import CvText from './CvText';

import { Nav, NavItem, NavLink } from 'reactstrap';
import Scrollspy from 'react-scrollspy'

class CvMain extends React.Component {
  constructor(props) {
    super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
          activeTab: '1'
        };
      }

      toggle(tab) {
        if (this.state.activeTab !== tab) {
          this.setState({
            activeTab: tab
          });
        }
      }

    render() {
      return (
        <div id="cvmaindiv">
        <Container fluid id="cvcontainer">
        <Row id="cvrow">

            <Col id="navcol"
          xs={{ size: 0, offset: 0 }}
          sm={{ size: 0, offset: 0 }}
          md={{ size: 2, offset: 0 }}
          lg={{ size: 2, offset: 0 }}
          xl={{ size: 2, offset: 0 }}>

<Scrollspy items={ ['section-1', 'section-2'] } currentClassName="active">
        <Nav vertical >


            <NavItem>
              <NavLink href="#section-1" active>Link</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#section-2">Link</NavLink>
            </NavItem>
        </Nav>
  </Scrollspy>
        </Col>

        <Col>
          <CvText> </CvText>
        </Col>
        </Row>
        </Container>
        </div>
      );
    }
  }

export default CvMain;
