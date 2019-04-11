import React, { Suspense} from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import "./css/theme.css";
import "./css/leaf.css";


import PayloadBody from './PayloadBody'
import { createBrowserHistory } from 'history';
const MainNavbar = React.lazy(() => import('./MainNavbar'));



class MainFrame extends React.Component {
  constructor(props){
    super(props)
    let theHistory = createBrowserHistory()
    theHistory.listen(this.popHistory.bind(this));
    this.state = {bodyPayloadType: 2, //1 == CV; 2 == List; 3 == subpage
                  filterText: "",
                  href:  "",
                  history: theHistory
                }
  }

popHistory(location, action){
     // console.log(location.state)
     // console.log(location.pathname!=="/")
     // console.log(
     //             `The current URL is ${location.pathname}${location.search}${location.hash}`
     //           );
  if(location.state!==undefined & action==='POP')
  {
  this.setState(location.state)
}
else if(location.state===undefined & location.pathname!=="/" & action==='POP')
{
// browser moves automatically when url changes
}
}

  setStateWithHistoryPush(stateUpdate){
    const stateToStore={
                bodyPayloadType: this.state.bodyPayloadType,
                filterText: this.state.filterText,
                href:  this.state.href
                }

    this.state.history.push({state:
      {...stateToStore,
       ...stateUpdate}});
    this.setState(stateUpdate) }

  setStateWithHistoryReplace(stateUpdate){
    const stateToStore={
                bodyPayloadType: this.state.bodyPayloadType,
                filterText: this.state.filterText,
                href:  this.state.href
                }

    this.state.history.replace({state:
      {...stateToStore,
       ...stateUpdate}});
    this.setState(stateUpdate)
  }

  handleInput(event) {
    if (this.state.filterText==="") {
      this.setStateWithHistoryPush({filterText: event.target.value})
    }
    else{
    this.setStateWithHistoryReplace({filterText: event.target.value})
}
  }

  routeToPage(new_href){
    this.setStateWithHistoryPush({bodyPayloadType: 3,
                   href:  new_href})}
  switchState() {
        const theNextType = nextPayloadType(this.state.bodyPayloadType)
        this.setStateWithHistoryPush({bodyPayloadType: theNextType})
            }

  render() {

      const theNextType = nextPayloadType(this.state.bodyPayloadType)
      window.scrollTo(0, 0)
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
