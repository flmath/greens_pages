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
      <CvHeader>Personal Info</CvHeader>
      <section id="PersonalInfo">
        <PersonalInfo />
      </section>
      <CvHeader>Skills</CvHeader>
      <section id="Skills">
        <Skills />
      </section>
      <CvHeader>Experience</CvHeader>
      <section id="Experience">
        <Experience />
      </section>
      <CvHeader>Education</CvHeader>
      <section id="Education">
        <Education />
      </section>
      <CvHeader>Certicicates</CvHeader>
      <section id="Certificates">
        <Certicicates />
      </section>
      <CvHeader>Interests</CvHeader>
      <section id="Interests">
        <Interests />
      </section>
      <div id="empty_scroll"><br /></div>
    </div>
  );
}
export default CvText;
