import React from 'react';

import {Navbar, NavbarBrand,Form, FormGroup, Input} from 'reactstrap';
import CvMain from './cv/CvMain';
import ImgBrand from './ImgBrand';

import brandCv from './pics/butterflycv.png';
import brand from './pics/butterfly.png';

function MainFrame(props) {
      return (

        <div id="topdiv">

      <Navbar id="navbar">
        <Form id="searchForm">
      <Input type="text" name="postSearch" id="postSearchInput" placeholder="Type tags or title" />
        </Form>
        <NavbarBrand href="/" className="ml-auto">
            <ImgBrand></ImgBrand>
        </NavbarBrand>
      </Navbar>
        <div id="the_body">
          <CvMain></CvMain>
        </div>

      </div>

      );

  }

export default MainFrame;
