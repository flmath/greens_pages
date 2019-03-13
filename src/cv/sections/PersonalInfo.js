import React from 'react';
import { Container, Row, Col } from 'reactstrap';

const ColKey = props => <Col
xs={{ size: 0, offset: 0 }}
sm={{ size: 0, offset: 0 }}
md={{ size: 5, offset: 1 }}
lg={{ size: 5, offset: 1 }}
xl={{ size: 5, offset: 1 }}
>
{props.children} </Col>;
const ColVal = props => <Col
  xs={{ size: 0, offset: 0 }}
  sm={{ size: 0, offset: 0 }}
  md={{ size: 6, offset: 0 }}
  lg={{ size: 6, offset: 0 }}
  xl={{ size: 6, offset: 0 }}>
{props.children} </Col>;

const ColData = props => <Col
  xs={{ size: 12, offset: 0 }}
  sm={{ size: 12, offset: 0 }}
  md={{ size: 6, offset: 2 }}
  lg={{ size: 6, offset: 2 }}
  xl={{ size: 6, offset: 2 }}>
{props.children} </Col>;

const ColPic = props => <Col
  xs={{ size: 0, offset: 0 }}
  sm={{ size: 0, offset: 0 }}
  md={{ size: 4, offset: 0 }}
  lg={{ size: 4, offset: 0 }}
  xl={{ size: 4, offset: 0 }}>
{props.children} </Col>;

const ColHalf = props => <Col
  xs={{ size: 5, offset: 0 }}
  sm={{ size: 5, offset: 0 }}
  md={{ size: 5, offset: 0 }}
  lg={{ size: 5, offset: 0 }}
  xl={{ size: 5, offset: 0 }}>
{props.children} </Col>;


export default class PersonalInfo extends React.Component {
  constructor(props) {
      super(props);
    }
    render() {
      return (
        <div>
      <Container fluid="true">
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
   	<img src="includes/face.jpg" class="img-thumbnail" alt="Photo of me."/>
         </ColPic>
   </Row> </Container>
     </div>
      );
    }
  }
