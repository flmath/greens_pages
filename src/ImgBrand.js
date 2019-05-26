import React from 'react';

import brandCv from './pics/inactcv.png';
import brandCvAct from './pics/actcv.png';
import brandList from './pics/inactlist.png';
import brandListAct from './pics/actlist.png';
import brandNone from './pics/inactnone.png';
import brandNoneAct from './pics/actnone.png';

class ImgBrand extends React.Component{
  constructor(props) {
    super(props);
    this.state = { isActive: 0};
    }

  getPicture(){ return this.getPictureHandler(this.props.type, this.state.isActive) }

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
