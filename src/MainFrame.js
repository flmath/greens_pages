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
                     <Route path='/privacy-policy' component={Page2} />

                   </div>
                 </Router>
      </div>

      );

  }}

  function Page2(props) {
    require("./pages/output")

      return (
      <div >
        <iframe
              src="./pages/output"

        />
         </div>)
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


        {/*fetch('https://raw.githubusercontent.com/flmath/matrix_implementations_in_erlang/master/jupyter/growth_projections.ipynb',{
        mode: 'no-cors',
        method: 'GET'
        }
    )*/}
    fetch("[html-loader!./pages/output.html]")
    .then((r) => r)
    .then(
          (response) => {

            this.setState({
              isLoaded: true,
              items: response
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
          return (<div dangerouslySetInnerHTML={{__html: items}}></div>)};

      }
    }












  function Child({ match }) {
    return (
      <div>
        <h3>ID: {match.params.id}</h3>
      </div>
    );
  }



export default MainFrame;
