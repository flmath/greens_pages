import React from 'react';
import PersonalInfo from './sections/PersonalInfo';
import Skills from './sections/Skills';
import Experience from './sections/Experience';
import Education from './sections/Education';
import Certicicates from './sections/Certificates';
import Interests from './sections/Interests';

function CvText(props) {
      return (
        <div>
        <hr/>
          <section id="section-1"> <PersonalInfo></PersonalInfo></section>
        <hr/>
          <Skills></Skills>
        <hr/>
          <Experience></Experience>
        <hr/>
        <section id="section-2">  <Education></Education></section>
        <hr/>
          <Certicicates></Certicicates>
        <hr/>
          <Interests></Interests>
      </div>
      );
  }
export default CvText;
