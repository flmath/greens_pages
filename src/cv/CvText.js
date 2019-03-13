import React from 'react';
import PersonalInfo from './sections/PersonalInfo';
import Skills from './sections/Skills';
import Experience from './sections/Experience';
import Education from './sections/Education';
import Certicicates from './sections/Certificates';
import Interests from './sections/Interests';

class CvText extends React.Component {
  constructor(props) {
      super(props);
    }
    render() {
      return (
        <div>
        <hr/>
          <PersonalInfo></PersonalInfo>
        <hr/>
          <Skills></Skills>
        <hr/>
          <Experience></Experience>
        <hr/>
          <Education></Education>
        <hr/>
          <Certicicates></Certicicates>
        <hr/>
          <Interests></Interests>
      </div>
      );
    }
  }

export default CvText;
