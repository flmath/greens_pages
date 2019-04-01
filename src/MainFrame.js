import React from 'react';

import {Navbar, NavbarBrand,Form, Input} from 'reactstrap';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import MainNavbar from './MainNavbar'
import CvMain from './cv/CvMain'
import PostList from './PostList.js'
import PagesInterface from './PagesInterface'

class MainFrame extends React.Component {
  constructor(props){
    super(props)
    this.state = {bodyPayloadType: 2, //1 == CV; 2 == List; 3 == subpage
                  filterText: "",
                  href:  ""}
  }
  handleInput(event) {
    this.setState({filterText: event.target.value})
  }
  routeToPage(new_href){
    this.setState({bodyPayloadType: 3,
                   href:  new_href})}
  switchState() {
        const theNextType = nextPayloadType(this.state.bodyPayloadType)
        this.setState({bodyPayloadType: theNextType})
            }

  render(){
      const theNextType = nextPayloadType(this.state.bodyPayloadType)
      return (
      <div id="topdiv">
          <MainNavbar filterText={this.state.filterText}
                      handleInput = {this.handleInput.bind(this)}
                      nextPayloadType = {theNextType}
                      handleStateChange = {this.switchState.bind(this)}
                       >
          </MainNavbar>
          <PayloadBody type = {this.state.bodyPayloadType}
                       filterText = {this.state.filterText}
                       routeToPage = {this.routeToPage.bind(this)}
                       href = {this.state.href}></PayloadBody>
      </div>
      );
  }}

function nextPayloadType(currentType)
{
  // 1 -> 2, 2-> 1, 3 -> 2
  // CV -> List, List -> CV,  Subpage -> List
  const stateMap = {1:2,2:1,3:2};
  return stateMap[currentType]
}

function PayloadBody(props)
{
if(props.type===1){
  return(<div><CvMain></CvMain></div>)
}
else if(props.type===2){
  return(<div><PostList filterText = {props.filterText}
                        routeToPage = {props.routeToPage}>
              </PostList></div>)
}
else if(props.type===3){
  return(<div><PagesInterface href={props.href}></PagesInterface></div>)
}
}


export default MainFrame;
