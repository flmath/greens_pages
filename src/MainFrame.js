import React from 'react';

import PayloadBody from './PayloadBody'
import { withRouter } from "react-router-dom"

import {nextPayloadType} from './SupportFunctions'

const MainNavbar = React.lazy(() => import('./MainNavbar'));

class MainFrame extends React.Component {
  constructor(props){
    super(props)
    this.state = {filterText: ""}
  }

  handleInput(event) {
      this.setState({filterText: event.target.value})
    }

  routeToPage(new_href){
    console.log("/display" + new_href)
    this.props.history.push("/display" + new_href)
  }

  switchState() {
        const theType = nextPayloadType(this.props.location.pathname)
        this.props.history.push(theType)
        }

  componentWillMount() { window.scrollTo(0, 0) }

  render() {
    return (
      <div>
          <MainNavbar filterText={this.state.filterText}
                      handleInput = {this.handleInput.bind(this)}
                      type = {this.props.location.pathname}
                      handleStateChange = {this.switchState.bind(this)}
                       >
          </MainNavbar>

          <PayloadBody type = {this.props.location.pathname}
                       filterText = {this.state.filterText}
                       routeToPage = {this.routeToPage.bind(this)}
                       handleStateChange = {this.switchState.bind(this)}
                       ></PayloadBody>
      </div>
      );
  }}


export default withRouter(MainFrame);
