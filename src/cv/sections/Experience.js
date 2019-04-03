import React from "react";
import {Container} from "reactstrap";

export default function Experience(props) {
  return (
    <div>
      <Container className="my_transparent_container">
      <div className="timeline">
        <div className="container_leafs left">
          <div className="content">
            <h2>
              08/2015 to present
              <br />
              Ericsson SBG
            </h2>
            <p>
              <br />
              Developing SBG (Session Border Gateway) as a Consultant from DEK
              Sweden. The Media Security Control, Overload Control, Network
              Provided Location Information features and WiFi access.
              <br />
              Creating tool parsing test logs to a SQL database.
            </p>
          </div>
        </div>
        <div className="container_leafs right">
          <div className="content">
            <h2>
              08/2015 to present
              <br />
              DEK Sweden
            </h2>
            <p>
              <br />
              Developing SBG (Session Border Gateway) at Ericsson. Creating a
              web GUI for OTP Common Test.
            </p>
          </div>
        </div>
        <div className="container_leafs left">
          <div className="content">
            <h2>
              01/2014 to 06/2015
              <br />
              Ericsson SBG
            </h2>
            <p>
              <br />
              Expanding a TLS support for the project. Assessing efficiency of
              throttling algorithms for SIP messages with a simulation of the
              node (in R language).
              <br />
              Writting support scripts for tagging PTA language.
            </p>
          </div>
        </div>
        <div className="container_leafs left">
          <div className="content">
            <h2>
              05/2012 to 12/2013
              <br />
              Ericsson MTAS
            </h2>
            <p>
              <br />
              Developing MTAS (Multimedia Telephony Application Server). Working
              with in agile methodology on design (C++), test (TTCN-3), and
              documentation of the IMS node.
            </p>
          </div>
        </div>
        <div className="container_leafs right">
          <div className="content">
            <h2>
              02/2012 to 07/2015
              <br />
              Ericpol
            </h2>
            <p>
              <br />
              Trainings and examinations preparing for a supplier role in
              external companies. <br />
              Passed exams from Erlang, TTCN-3, and C++ languages.
              <br />
              Internal in-house trainings. <br />
              A supplier for MTAS and SBG projects.
              <br />
            </p>
          </div>
        </div>
      </div>{" "}
      </Container>
    </div>
  );
}
