import React from 'react';
import {Navbar } from 'reactstrap';
import CvMain from './cv/CvMain';

const Box = props => <div className="box">{props.children} </div>;
function MainFrame(props) {
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

export default MainFrame;
