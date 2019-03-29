import React from 'react';

import {Navbar, NavbarBrand,Form, Input} from 'reactstrap';
import ImgBrand from './ImgBrand';
import "./theme.css";
import "./leaf.css";

function MainNavbar(props){
      const filterText  = props.filterText
      const handleInput = props.handleInput
      return (

      <div>
      <Navbar id="navbar">
      <Form id="searchForm">
      <Input type="text" name="postSearch" id="postSearchInput" placeholder="Type tag or title"
          value={filterText}  onChange={handleInput}
         />
        </Form>
        <NavbarBrand href="/" className="ml-auto">
            <ImgBrand></ImgBrand>
        </NavbarBrand>
      </Navbar>
      </div>
      );
  }

export default MainNavbar;
