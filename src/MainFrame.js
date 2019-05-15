import React, { Suspense} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./css/theme.css";
import "./css/leaf.css";


import PayloadBody from './PayloadBody'
const MainNavbar = React.lazy(() => import('./MainNavbar'));

class MainFrame extends React.Component {
  constructor(props){
    super(props)
    this.state = {bodyPayloadType: 2, //1 == CV; 2 == List; 3 == subpage; 4 == readme
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

  componentWillMount() { window.scrollTo(0, 0) }

  render() {
      const theNextType = nextPayloadType(this.state.bodyPayloadType)
      return (
      <div id="topdiv">
        <Suspense fallback={<div>Loading...</div>}>
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
        </Suspense>

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

export default MainFrame;
