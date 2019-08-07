import React from "react";
import { CvShortHeader as CvHeader} from "../../main_frame/payload_body/routes/cv/HeadersSupport";
import Introduction from "./sections/Introduction";
import Setup from "./sections/Setup";
import BasicScenario from "./sections/BasicScenario";
import TraceFunction from "./sections/TraceFunction";
import FindCaller from "./sections/FindCaller";
import Timestamps from "./sections/Timestamps";
import CustomHandler from "./sections/CustomHandler";
import CustomHandlerMessageFilter from "./sections/CustomHandlerMessageFilter";
import CustomHandlerSignals from "./sections/CustomHandlerSignals";
import RegisteredProcessesTracking from "./sections/RegisteredProcessesTracking";
import Cleanup from "./sections/Cleanup";
import Conclusion from "./sections/Conclusion";

function ErlangDbgText(props) {
  return (
    <div id = "cvmainbody">
      <section id="Introduction">
      <CvHeader>Introduction</CvHeader>
        <Introduction  />
      </section>

      <section  id="Setup">
      <CvHeader>Setup</CvHeader>
        <Setup />
      </section>

      <section  id="BasicScenario">
      <CvHeader>Basic Scenario</CvHeader>
        <BasicScenario />
      </section>

      <section  id="TraceFunction">
      <CvHeader>Trace Function</CvHeader>
        <TraceFunction />
      </section>

      <section  id="FindCaller">
      <CvHeader>Function Caller Finding</CvHeader>
        <FindCaller />
      </section>

      <section  id="Timestamps">
      <CvHeader>Timestamps</CvHeader>
        <Timestamps />
      </section>

      <section  id="CustomHandler">
      <CvHeader>Custom Handler: Introduction</CvHeader>
        <CustomHandler />
      </section>

      <section  id="CustomHandlerMessageFilter">
      <CvHeader>Custom Handler: Message Filter</CvHeader>
        <CustomHandlerMessageFilter />
      </section>

      <section id="CustomHandlerSignals">
      <CvHeader>Custom Handler: Signals</CvHeader>
        <CustomHandlerSignals />
      </section>

      <section  id="RegisteredProcessesTracking">
      <CvHeader>Registered Process Tracking</CvHeader>
        <RegisteredProcessesTracking />
      </section>

      <section id="Cleanup">
      <CvHeader>Cleanup</CvHeader>
        <Cleanup />
      </section>

      <section id="Conclusion">
      <CvHeader>Conclusion</CvHeader>
        <Conclusion />
      </section>

      <div className="empty_scroll"><br /></div>
    </div>
  );
}
export default ErlangDbgText;
