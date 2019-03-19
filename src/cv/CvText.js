import React from "react";
import { CvHeader } from "./HeadersSupport";
import PersonalInfo from "./sections/PersonalInfo";
import Skills from "./sections/Skills";
import Experience from "./sections/Experience";
import Education from "./sections/Education";
import Certicicates from "./sections/Certificates";
import Interests from "./sections/Interests";

function CvText(props) {
  return (
    <div>
      <section id="PersonalInfo">
      <CvHeader>Personal Info</CvHeader>
        <PersonalInfo />
      </section>
      <section id="Skills">
      <CvHeader>Skills</CvHeader>
        <Skills />
      </section>
      <section id="Experience">
      <CvHeader>Experience</CvHeader>
        <Experience />
      </section>
      <section id="Education">
      <CvHeader>Education</CvHeader>
        <Education />
      </section>
      <section id="Certificates">
      <CvHeader>Certicicates</CvHeader>
        <Certicicates />
      </section>
      <section id="Interests">
      <CvHeader>Interests</CvHeader>
        <Interests />
      </section>
      <div id="empty_scroll"><br /></div>
    </div>
  );
}
export default CvText;
