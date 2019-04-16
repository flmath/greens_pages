import React from 'react';
import {Row} from 'reactstrap';
import {ColShortVal, ColShortKey} from '../ReactstrapSupport';

export default function Skills(props) {
  return (<div className="my_cv_container">
    <p>
  Professionally I work as an Erlang programmer developing Session Border Controller node in IMS network.
  The technical stack is based on Linux, the above mentioned Erlang, Git/Gerrit as the project version control system,
  and Jenkins for CI/CD. Throughout my career I was working in Agile teams(usually SCRUM) tasked with end-to-end process of delivering requested feature.
  I was usually responsible for: analyzing requirements, evaluating feasibility and designing solutions, implementing solutions, writing function tests.
</p>
   <p>
  Outside of feature work I also implement tools for a development environments I work in.
  For example I have written in Python tool to parse HTML test logs into a sqlite database (to enable more advanced analysis&#39;).
   Python is my favorite scripting language, I usually use Anaconda to have access to libraries like Numpy, Pandas and Jupyter.
   During my various projects and courses I have taken I used a lot of different languages( and frameworks) including React, Matlab/Octave,
   R and SQL(Sqlite).
</p> <p>

           I have two github accounts where I'm keeping my public projects.
           The <a target="_blank" rel="noopener noreferrer" href='https://github.com/flmath'>main</a>&nbsp;repository contains projects that are finished and clean (like various implementations of matrixes in Erlang) and active ones like this blog.
        The <a  target="_blank" rel="noopener noreferrer" href='https://github.com/flmath-dirty'>"dirty"</a> repository contains less clean code,
        and projects that are queued for cleaning.
        For example web graphics application to Erlang Common Test
        (AngularJs which I plan to replace with other framework and the Cowboy framework which is dependency I am planning to remove).
      </p>
      <p>
       The first programming language I have learnt was C++, I has been some time since I have used it, but it does not mean I have anything against it.
      </p>
      <hr/>

      <Row>
        <ColShortKey>Professional product development:
        </ColShortKey>
        <ColShortVal>Erlang, IMS, Linux, SCRUM, Git/Gerrit</ColShortVal>
      </Row>
      <Row>
        <ColShortKey>Scripting for professional purpose:</ColShortKey>
        <ColShortVal>Python, Sqlite, Javascript, R language</ColShortVal>
      </Row>
  </div>);
}
