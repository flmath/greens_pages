import React from 'react';

import {Navbar, NavbarBrand,Form, Input} from 'reactstrap';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import MainNavbar from './MainNavbar'
import CvMain from './cv/CvMain'
import PostList from './PostList.js'
import PagesInterface from './PagesInterface'
import ImgBrand from './ImgBrand';

class MainFrame extends React.Component {
  constructor(props){
    super(props)
    this.state = {bodyPayloadType: 2, //1 -> CV, 2 -> List
                  filterText: "",
                  href:  ""}
  }
  handleInput(event) {
    this.setState({filterText: event.target.value})
  }
  route_to_page(new_href){
    this.setState({bodyPayloadType: 3,
                    href:  new_href})}
  render(){
      return (
      <div id="topdiv">
          <MainNavbar filterText={this.state.filterText}  handleInput = {this.handleInput.bind(this)}>
          </MainNavbar>
          <PayloadBody type={this.state.bodyPayloadType} filterText = {this.state.filterText}
                       routeToPage = {this.route_to_page.bind(this)} href={this.state.href}></PayloadBody>
      </div>
      );
  }}

function PayloadBody(props)
{
if(props.type===1){
return(
  <div>
<CvMain></CvMain>
</div>)}
 else if(props.type===2)
 {
  return(<div><PostList filterText = {props.filterText}
            routeToPage = {props.routeToPage} ></PostList></div>)
}
else if(props.type===3)
{
  return(<div><PagesInterface href={props.href}></PagesInterface></div>)
}
}



export default MainFrame;
