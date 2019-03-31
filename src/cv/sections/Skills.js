import React from 'react';
import {Container, Row} from 'reactstrap';
import {ColShortVal, ColShortKey} from './ReactstrapSupport';

export default function Skills(props) {
  return (<div className="personal_container_tint">
    <Container className="my_cv_container" >
      <p>
        As a professional I work as an Erlang programmer developing Session Border Controller node in IMS network. The project is developed and running in Linux environment. We use Git as a version control system. Throughout my career I was working on Agile teams, mostly with Scrum methodologies. At my current team we are trying to follow Clean Code and TDD rules, as much as, it is compilant with the project established ways of working.
      </p>
      <p>
        I also use Python (often connected with Sqlite database) as a scripting language to automate and expedite my work. In a limited manner I also use the R language. Occasionally Javascript to visualize tasks and problems.
      </p>
      <p>
        Outside of professional work I'm trying to bridge my professional skills with things I've learnt during studies. As a result of Computer Science to Mathematics study I developed interest in fields as Artificial Inteligence, Statistics, Computer Vision, Cryptography and Computional Genetics.
      </p>
      <p>
        Aside of that I have a github account where I'm keeping the Jump to Conclusions project. The project is web graphics application to Erlang Common Test. It uses Angularjs, Bootstrap for frontend and the Cowboy framework over OTP for backend.
      </p>

      <hr/>

      <Row>
        <ColShortKey>Professional product development:
        </ColShortKey>
        <ColShortVal>Erlang, IMS, Linux, Git, Scrum, Clean Code</ColShortVal>
      </Row>
      <Row>
        <ColShortKey>Scripting for professional purpose:</ColShortKey>
        <ColShortVal>Python, Sqlite, Javascript, R language</ColShortVal>
      </Row>
      <Row>
        <ColShortKey>Fields of additional interest:</ColShortKey>
        <ColShortVal>Mathematics and its applied subfields in IT</ColShortVal>
      </Row>

    </Container>
  </div>);
}
