import React from 'react';

import {Navbar, NavbarBrand,Form, Input, InputGroup, Nav, NavItem, NavLink, InputGroupAddon, Button, ButtonGroup} from 'reactstrap';
import ImgBrand from './ImgBrand';

function MainNavbar(props){
      const filterText  = props.filterText
      const handleInput = props.handleInput
      const handleStateChange = props.handleStateChange
      const type = props.type
      return (
      <div>
      <Navbar id="navbar">


      <Form id="searchForm">

        <InputGroup>
 <InputGroupAddon addonType="prepend">
          
                <NavLink href="/">Articles list</NavLink>

            </InputGroupAddon>

              <InputGroupAddon addonType="prepend">

              <NavLink href="/cv">Web CV</NavLink>


  </InputGroupAddon>


      <Input type="text" name={null} id="postSearchInput" placeholder="Type tag or title"
          value={filterText}  onChange={handleInput}
         />
            </InputGroup>

      </Form>
      </Navbar>
      </div>
      );
  }

export default MainNavbar;
