import React from 'react';

import {Navbar, NavbarBrand,Form, Input} from 'reactstrap';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
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
       <Router>
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
                 {/*
                        It's possible to use regular expressions to control what param values should be matched.
                           * "/order/asc"  - matched
                           * "/order/desc" - matched
                           * "/order/foo"  - not matched
                     */}
                     <Route
                       path="/order/:direction(asc|desc)"
                       component={ComponentWithRegex}
                     />
                     <Route path='/privacy-policy' component={() => { window.location = 'https://example.zendesk.com/hc/en-us/articles/123456789-Privacy-Policies'; return null;} }/>
                         
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

  function ComponentWithRegex({ match }) {
    return (
      <div>
        <h3>Only asc/desc are allowed: {match.params.direction}</h3>
      </div>
    );
  }

export default MainFrame;
