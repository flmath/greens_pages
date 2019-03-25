import React from 'react';

import {Navbar, NavbarBrand,Form, Input} from 'reactstrap';
import CvMain from './cv/CvMain';
import PostList from './PostList.js'
import ImgBrand from './ImgBrand';
import "./theme.css";
import "./leaf.css";

class MainFrame extends React.Component {
  constructor(props){
    super(props)
    this.state = {body: 'cv',
                  filterText: ""}

  }
  handleInput(event) {
    this.setState({filterText: event.target.value})
  }
  route_to_page(href){
alert(href)
    return;}
  render(){
      return (

        <div id="topdiv">

      <Navbar id="navbar">
        <Form id="searchForm">
      <Input type="text" name="postSearch" id="postSearchInput" placeholder="Type tag or title"
          value={this.state.filterText}  onChange={this.handleInput.bind(this)}
         />
        </Form>
        <NavbarBrand href="/" className="ml-auto">
            <ImgBrand></ImgBrand>
        </NavbarBrand>
      </Navbar>
       <PostList filterText = {this.state.filterText}
                 routeToPage = {this.route_to_page} ></PostList>




      </div>

      );

  }}

export default MainFrame;
