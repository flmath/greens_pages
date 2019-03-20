import React from 'react';
import {Navbar} from 'reactstrap';
import CvMain from './cv/CvMain';


function MainFrame(props) {
      return (

        <div id="topdiv">

        <Navbar id="navbar" >

        </Navbar>
        <div id="the_body">
          <CvMain></CvMain>
        </div></div>
      );

  }

export default MainFrame;
