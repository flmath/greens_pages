import React from 'react';

import {Navbar, NavbarBrand,Form, Input} from 'reactstrap';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import MainNavbar from './MainNavbar';
import CvMain from './cv/CvMain';
import PostList from './PostList.js'
import PagesInterface from './PagesInterface'
import ImgBrand from './ImgBrand';

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
       <Router>
      <MainNavbar filterText={this.state.filterText}  handleInput = {this.handleInput.bind(this)}>
      </MainNavbar>
       <PostList filterText = {this.state.filterText}
                 routeToPage = {this.route_to_page} ></PostList>


                   <div>
                     <h2>Accounts</h2>
                     <ul>
                       <li>
                         <Link to="/netflix">Netflix</Link>
                       </li>
                       <li>
                         <Link to="/zillow-group">Zillow Group</Link>
                       </li>
                       <li>
                         <Link to="/yahoo">Yahoo</Link>
                       </li>
                       <li>
                         <Link to="/modus-create">Modus Create</Link>
                       </li>
                       <li>
                         <Link to="/privacy-policy">external</Link>
                       </li>
                     </ul>

                     <Route path="/:id" component={Child} />
                     <Route path='/privacy-policy' component={PagesInterface} />

                   </div>
                 </Router>
      </div>
      );
  }}



  function Child({ match }) {
    return (
      <div>
        <h3>ID: {match.params.id}</h3>
      </div>
    );
  }



export default MainFrame;
