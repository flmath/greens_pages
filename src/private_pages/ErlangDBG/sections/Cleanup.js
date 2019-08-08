import React from "react";
import ReactMarkdown from 'react-markdown';
import CodeBlock from "../CodeBlock";

export default function Cleanup(props) {

const input =
'Lets purge the tracing from the system.\n'+
'First clean up the process flags.\n'+
'```erlang\n'+
' > dbg:p(all,clear).\n'+
'```\n'+
'Remove function tracing.\n'+
'```erlang\n'+
' > dbg:ctp(\'_\').\n'+
'```\n'+
'Shutdown the debug tracer.\n'+
'```erlang\n'+
' > dbg:stop().\n'+
'```\n'

  return (
    <div className="my_md_container">
     <ReactMarkdown source={input} renderers={{ code: CodeBlock }}/>
    </div>
  );
}
