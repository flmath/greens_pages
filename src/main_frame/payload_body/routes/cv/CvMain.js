import React from "react";
import { Container, Row, Col } from "reactstrap";

import CvText from "./CvText";
import { NavLink } from "reactstrap";
import Scrollspy from "react-scrollspy";


class CvMain extends React.Component {
  constructor(props){
    super(props)
    this.onHashchange = this.onHashchange.bind(this);
  }

  onHashchange(){
      const rootEl = document.querySelector("#payload_body")
      const hashEl =
        this.props.location.hash ? document.querySelector(this.props.location.hash) : null
      if(hashEl)
      hashEl.scrollIntoView()
      else
      rootEl.scrollTo(0,0)
      }
 componentDidMount(){
    window.addEventListener('hashchange', this.onHashchange, false);
    }
    componentWillUnmount() {
      window.removeEventListener('hashchange', this.onHashchange, false);
   }

   render(){
    return (
      <div id="cvmaindiv">
        <Container fluid id="cvcontainer">
          <Row id="cvrow">
            <Col
              id="navcol"
              xs={{ size: 0, offset: 0 }}
              sm={{ size: 0, offset: 0 }}
              md={{ size: 2, offset: 1 }}
              lg={{ size: 2, offset: 0 }}
              xl={{ size: 2, offset: 1 }}
            >
              <Scrollspy basename={process.env.PUBLIC_URL+'/cv'}
                offset={-100}
                items={[
                  "PersonalInfo",
                  "Skills",
                  "Experience",
                  "Education",
                  "Certificates",
                  "Interests"
                ]}
                rootEl="#payload_body"
                currentClassName="active"
              >
                <NavLink href="#PersonalInfo">Personal Info</NavLink>
                <NavLink href="#Skills">Skills</NavLink>
                <NavLink href="#Experience">Experience</NavLink>
                <NavLink href="#Education">Education</NavLink>
                <NavLink href="#Certificates">Certificates</NavLink>
                <NavLink href="#Interests">Interests</NavLink>
              </Scrollspy>
            </Col>
            <Col id = "cvmain">
              <CvText> </CvText>
            </Col>
          </Row>
        </Container>
      </div>
    );
}
}
export default CvMain;
