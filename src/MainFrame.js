import React, { Suspense} from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import "./css/theme.css";
import "./css/leaf.css";

const MainNavbar = React.lazy(() => import('./MainNavbar'));
const CvMain = React.lazy(() => import('./cv/CvMain'));
const PostList = React.lazy(() => import('./PostList'));
const PagesInterface = React.lazy(() => import('./PagesInterface'));


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
      window.scrollTo(0, 0)
      return (
      <div id="topdiv">
        <Suspense id="my_sky_background" fallback={<div>Loading...</div>}>
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
