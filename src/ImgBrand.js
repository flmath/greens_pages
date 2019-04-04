import React from 'react';

import brandCv from './pics/penrosecv.png';
import brand from './pics/penrose3.png';
import brandList from './pics/penroselist.png';

class ImgBrand extends React.Component{
  constructor(props) {
    super(props);
    this.state = { frame : 0};
    }

  getPicture(){
    if (this.state.frame===0) {return brand}
    else if (this.state.frame===1){return brandCv}
    else {return brandList}
  }
  setOnEnter = () => {
    this.setState({frame : this.props.nextPayloadType});
  }
  setOnLeave = () => {
    this.setState({frame : 0});
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
