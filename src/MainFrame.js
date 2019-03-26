import React from 'react';

import {Navbar, NavbarBrand,Form, Input} from 'reactstrap';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import CvMain from './cv/CvMain';
import PostList from './PostList.js'
import PagesInterface from './PagesInterface'
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
                     <Route path='/privacy-policy' component={MyComponent} />

                   </div>
                 </Router>



      </div>

      );

  }}


  function BlogPage(props) {
    const PostUrl = { __html: "https://github.com"};
    return (
    <div dangerouslySetInnerHTML={PostUrl}>
            </div>
    );
  }
  function Page(props) {
    return (
    <div >
           <iframe
                 src={`https://github.com`}

           />
       </div>)
  }



  class MyComponent extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        error: null,
        isLoaded: false,
        items: []
      };
    }




    componentDidMount() {
        let header = new Headers();
        header.set('Content-Type', 'application/json')
        header.set("Access-Control-Allow-Origin", "*")
        header.set('Access-Control-Allow-Headers', "Content-Type")
        header.append('Access-Control-Allow-Headers', "x-requested-with")
        header.set('Access-Control-Allow-Methods', 'GET')
        header.append('Access-Control-Allow-Methods', 'POST')
        fetch('http://github.com',{
        crossDomain: true,
        method: 'GET',
        headers: header}
    )
        .then((response)=> response.json())
        .then(
          (responseJson) => {
            console.log(responseJson);
            this.setState({
              isLoaded: true,
              items: []
            });
          },
          // Note: it's important to handle errors here
          // instead of a catch() block so that we don't swallow
          // exceptions from actual bugs in components.
          (error) => {
            this.setState({
              isLoaded: true,
              error
            });
          }
        )
    }

    render() {
      const { error, isLoaded, items } = this.state;
      if (error) {
        return <div>ERror: {error.message}</div>;
      } else if (!isLoaded) {
        return <div>Loading...</div>;
      } else {
        return (
          <ul>
            {items.map(item => (
              <li key={item.name}>
                {item.name} {item.price}
              </li>
            ))}
          </ul>
        );
      }
    }
  }











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
