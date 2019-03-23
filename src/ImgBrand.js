import React from 'react';

import brandCv from './pics/butterflycv.png';
import brand from './pics/butterfly.png';

class ImgBrand extends React.Component{
  constructor(props) {
    super(props);
    this.state = { frame : 0 };
  }

  getPicture(){
    if (this.state.frame==0) {return brand;
    } else {return brandCv;}
  }
  setOnEnter = () => {
    this.setState({frame : 1});
  }
  setOnLeave = () => {
    this.setState({frame : 0});
  }

  render(){
      return (
        <div>
            <img id="cv_image" src={this.getPicture()} alt="CV"
            onMouseEnter={this.setOnEnter}
            onMouseLeave={this.setOnLeave}
             />
       </div>
      );
    }
  }

export default ImgBrand;
