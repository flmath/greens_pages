import React, { Suspense} from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import "./css/theme.css";
import "./css/leaf.css";


import PayloadBody from './PayloadBody'
const MainNavbar = React.lazy(() => import('./MainNavbar'));



class MainFrame extends React.Component {
  constructor(props){
    super(props)
    this.state = {bodyPayloadType: 2, //1 == CV; 2 == List; 3 == subpage
                  filterText: "",
                  href:  "",
                  history: [],
                  historyIndex : 0
                }
  }
  handleInput(event) {
    this.setStateWithHistory({filterText: event.target.value})
  }
  routeToPage(new_href){
    this.setStateWithHistory({bodyPayloadType: 3,
                   href:  new_href})}
  switchState() {
        const theNextType = nextPayloadType(this.state.bodyPayloadType)
        this.setStateWithHistory({bodyPayloadType: theNextType})
            }

  setStateWithHistory(stateModificator){
    let history = this.state.history
    history.push({ bodyPayloadType: this.state.bodyPayloadType, //1 == CV; 2 == List; 3 == subpage
                  filterText: this.state.filterText,
                  href: this.state.href})
    stateModificator['history'] = history
    stateModificator['historyIndex'] += 1
    window.history.pushState({urlPath:'/'},"",'/')
    this.setState(stateModificator)
  }
  getHistoryBack(){
  const current_history = this.state.history
  const historyIndex = this.state.historyIndex
  if(historyIndex>0)
  {
  const lastHistoryElement = this.state.history[historyIndex-1]
  this.setState({ bodyPayloadType: lastHistoryElement.bodyPayloadType, //1 == CV; 2 == List; 3 == subpage
                  filterText: lastHistoryElement.filterText,
                  href: lastHistoryElement.href,
                  historyIndex: historyIndex
                })}
  else {
  this.setState(
    {bodyPayloadType: 2, //1 == CV; 2 == List; 3 == subpage
                  filterText: "",
                  href:  "",
                  history: []
                }) }}

  componentDidUpdate(){

                  window.onpopstate  = (e) => {this.getHistoryBack() }

                    }

  render(){
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
