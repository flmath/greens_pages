import React from 'react';
import { Nav, NavItem, Dropdown, DropdownItem,
        DropdownToggle, DropdownMenu, NavLink } from 'reactstrap';



class CvNav extends React.Component {
  constructor(props) {
      super(props);

      this.toggle = this.toggle.bind(this);
      this.state = {
        dropdownOpen: false
      };
    }

    toggle() {
      this.setState({
        dropdownOpen: !this.state.dropdownOpen
      });
    }

    render() {
      return (
        <div>
          <Nav pills vertical>
            <NavItem>
              <NavLink href="#" active>Link</NavLink>

              <NavLink href="#">Link</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#">Another Link</NavLink>
            </NavItem>
            <NavItem>
              <NavLink disabled href="#">Disabled Link</NavLink>
            </NavItem>
          </Nav>
        </div>
      );
    }
  }

export default CvNav;
