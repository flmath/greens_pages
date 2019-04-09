import React from 'react';

import {Navbar, NavbarBrand,Form, Input} from 'reactstrap';
import ImgBrand from './ImgBrand';
import staticImg from './pics/penrose3.png'

function MainNavbar(props){
      const filterText  = props.filterText
      const handleInput = props.handleInput
      const handleStateChange = props.handleStateChange
      const nextPayloadType = props.nextPayloadType

      return (
      <div>
      <Navbar id="navbar">
      <NavbarBrand className="mr-auto">
      <img id="cv_static_image" src={staticImg} alt="CV"
       />
       </NavbarBrand>
      <Form id="searchForm">
      <Input type="text" name="postSearch" id="postSearchInput" placeholder="Type tag or title"
          value={filterText}  onChange={handleInput}
         />
      </Form>
        <NavbarBrand className="ml-auto">
            <ImgBrand handleStateChange = {handleStateChange}
                      nextPayloadType = {nextPayloadType}></ImgBrand>
        </NavbarBrand>
      </Navbar>
      </div>
      );
  }

export default MainNavbar;
