import React from 'react';

import brandCv from './pics/spirographcv.png';
import brandCvAct from './pics/spirographcvact.png';
import brandList from './pics/spirographlist.png';
import brandListAct from './pics/spirographlistact.png';
import brandNone from './pics/spirographlist.png';
import brandNoneAct from './pics/spirographlistact.png';
import {nextPayloadType} from './SupportFunctions'

class ImgBrand extends React.Component{
  constructor(props) {
    super(props);
    this.state = { isActive: 0};
    }

  getPicture(){ return this.getPictureHandler(nextPayloadType(this.props.type), this.state.isActive) }

  getPictureHandler(frame, isActive){
    if (isActive===0) { return this.getInactivePicture(frame)}
    else if (isActive===1){return this.getActivePicture(frame)}
  }
  getInactivePicture(frame){
  if (frame==='/cv') { return brandCv}
    else if (frame==='/'){return brandList}
    else {return brandNone }
  }
  getActivePicture(frame){
  if (frame==='/cv') { return brandCvAct}
    else if (frame==='/'){return brandListAct }
    else {return brandNoneAct }
  }

  setOnLeave = () => {
    this.setState({isActive: 0});
  }
  setOnEnter = () => {
    this.setState({isActive: 1});
  }
  handleClick = () => {
    this.props.handleStateChange()
  }

  render(){

      return (
        <div>
          <img id="cv_image" src={this.getPicture()} alt="CV"
            onMouseEnter={this.setOnEnter}
            onMouseLeave={this.setOnLeave}
            onClick={this.props.handleStateChange}
            />
       </div>
      );
    }
  }


export default ImgBrand;
