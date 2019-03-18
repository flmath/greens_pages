import React from 'react';
import { Container, Row, Col, Navbar } from 'reactstrap';
import CvMain from './cv/CvMain';

const Box = props => <div className="box">{props.children} </div>;
class MainFrame extends React.Component {
  constructor(props) {
      super(props);
    }

    render() {
      return (

        <div id="topdiv">

        <Navbar   id="navbar" >
            <Box> .col </Box>
        </Navbar>
        <div id="the_body">
          <CvMain></CvMain>
        </div></div>

      );
    }
  }

export default MainFrame;
