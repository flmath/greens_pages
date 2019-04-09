import React from 'react';

import brandCv from './pics/penrosecv.png';
import brandCvAct from './pics/penrosecvact.png';
import brandList from './pics/penroselist.png';
import brandListAct from './pics/penroselistact.png';


class ImgBrand extends React.Component{
  constructor(props) {
    super(props);
    this.state = {    isActive: 0};
    }

  getPicture(){ return this.getPictureHandler(this.props.nextPayloadType, this.state.isActive) }

  getPictureHandler(frame, isActive){
    if (isActive===0) { return this.getInactivePicture(frame)}
    else if (isActive===1){return this.getActivePicture(frame)}
  }
  getInactivePicture(frame){
  if (frame===1) { return brandCv}
    else if (frame===2){return brandList}
  }
  getActivePicture(frame){
  if (frame===1) { return brandCvAct}
    else if (frame===2){return brandListAct}
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
            onClick={this.handleClick}
             />
       </div>
      );
    }
  }





export default ImgBrand;
