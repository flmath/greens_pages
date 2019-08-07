import React from "react";
import { Container, Row, Col } from "reactstrap";

import ErlangDbgText from "./ErlangDBG/ErlangDbgText";
import { NavLink } from "reactstrap";
import Scrollspy from "react-scrollspy";


function ErlangDBG(props) {
    return (
      <div id="cvmaindiv">
        <Container fluid id="cvcontainer">
          <Row id="cvrow">
            <Col
              id="navcol"
              xs={{ size: 0, offset: 0 }}
              sm={{ size: 0, offset: 0 }}
              md={{ size: 2, offset: 1 }}
              lg={{ size: 2, offset: 0 }}
              xl={{ size: 2, offset: 1 }}
            >
              <Scrollspy basename={process.env.PUBLIC_URL}
                offset={-200}
                items={[
                    "Introduction",
                    "Setup",
                    "BasicScenario",
                    "TraceFunction",
                    "FindCaller",
                    "Timestamps",
                    "CustomHandler",
                    "CustomHandlerMessageFilter",
                    "CustomHandlerSignals",
                    "RegisteredProcessesTracking",
                    "Cleanup",
                    "Conclusion"
                ]}
                currentClassName="active"
                rootEl="#payload_body"
              >
                <NavLink href="#Introduction">Introduction</NavLink>
                <NavLink href="#Setup">Setup</NavLink>
                <NavLink href="#BasicScenario">Basic Scenario</NavLink>
                <NavLink href="#TraceFunction">Trace Function</NavLink>
                <NavLink href="#FindCaller">Function Caller Finding</NavLink>
                <NavLink href="#Timestamps">Timestamps</NavLink>
                <NavLink href="#CustomHandler">Custom Handler: Introduction</NavLink>
                <NavLink href="#CustomHandlerMessageFilter">Custom Handler: Message Filter</NavLink>
                <NavLink href="#CustomHandlerSignals">Custom Handler: Signals</NavLink>
                <NavLink href="#RegisteredProcessesTracking">Registered Processes Tracking</NavLink>
                <NavLink href="#Cleanup">Cleanup</NavLink>
                <NavLink href="#Conclusion">Conclusion</NavLink>
              </Scrollspy>
            </Col>
            <Col id = "cvmain">
              <ErlangDbgText> </ErlangDbgText>
            </Col>
          </Row>
        </Container>
      </div>
    );
}

export default ErlangDBG;
