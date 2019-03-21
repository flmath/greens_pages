import React from 'react';
import {Navbar, NavbarBrand} from 'reactstrap';
import CvMain from './cv/CvMain';
import brandCv from './pics/butterflycv.png';

function MainFrame(props) {
      return (

        <div id="topdiv">

        <Navbar id="navbar" >
          <NavbarBrand href="/" className="ml-auto">
            <img id="cv_image" src={brandCv} alt="CV"/>
            </NavbarBrand>
        </Navbar>
        <div id="the_body">
          <CvMain></CvMain>
        </div></div>
      );

  }

export default MainFrame;
