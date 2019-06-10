import React from 'react';
import { withRouter } from "react-router-dom"
import {nextPayloadType} from './SupportFunctions'

import PayloadBody from './payload_body/PayloadBody'
const MainNavbar = React.lazy(() => import('./main_navbar/MainNavbar'));

class MainFrame extends React.Component {
  constructor(props){
    super(props)
    this.state = {filterText: ""}
  }

  handleInput(event) {
      this.setState({filterText: event.target.value})
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
                       handleStateChange = {this.switchState.bind(this)}
                       ></PayloadBody>
      </div>
      );
  }}


export default withRouter(MainFrame);
