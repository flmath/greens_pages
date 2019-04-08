import React from 'react';

import {Navbar, NavbarBrand,Form, Input} from 'reactstrap';
import ImgBrand from './ImgBrand';


function MainNavbar(props){
      const filterText  = props.filterText
      const handleInput = props.handleInput
      const handleStateChange = props.handleStateChange
      const nextPayloadType = props.nextPayloadType

      return (
      <div>
      <Navbar id="navbar">
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
