import React from 'react';
import {Container, Row} from 'reactstrap';
import {ColKey, ColVal, ColData, ColPic, ColHalf} from './ReactstrapSupport';
import face from './face.png';

export default function PersonalInfo(props) {
  return (<div class="personal_container_tint">
    <Container fluid="true">
      <Container >
        <Row>
          <ColData>
            <Row>
              <ColKey>Name:</ColKey>
              <ColVal>Mathias Green</ColVal>
            </Row>
            <Row>
              <ColKey>Address:</ColKey>
              <ColVal>Stockholm, Sweden</ColVal>
            </Row>
            <Row>
              <ColKey>Mail:</ColKey>
              <ColVal>
                <a href="mailto:flmathematic@gmail.com" target="_top">flmathematic@gmail.com</a>
              </ColVal>
            </Row>
            <Row>
              <ColKey>Linkedin profile:</ColKey>
              <ColVal>
                <a href="www.linkedin.com/in/mathias-green">mathias-green</a>
              </ColVal>
            </Row>
            <Row>
              <ColKey>Github accounts:</ColKey>
              <ColVal>
                <Row>
                  <ColHalf>
                    <a href="https://github.com/flmath">main</a>
                  </ColHalf>
                  <ColHalf>
                    <a href="https://github.com/flmath-dirty">secondary</a>
                  </ColHalf>
                </Row>
              </ColVal>
            </Row>
            <Row>
              <ColKey>Resume:</ColKey>
              <ColVal>
                <Row>
                  <ColHalf>
                    <a href="includes/offline/resume.pdf">PDF</a>
                  </ColHalf>
                  <ColHalf>
                    <a href="includes/offline/resume.odt">ODT</a>
                  </ColHalf>
                </Row>
              </ColVal>
            </Row>
          </ColData>
          <ColPic>
            <img src={face} class="img-thumbnail" alt="Here should be my face."/>
          </ColPic>
        </Row>
      </Container>
    </Container>
  </div>);

}
