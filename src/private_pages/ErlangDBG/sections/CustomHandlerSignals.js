import React from "react";
import ReactMarkdown from 'react-markdown';

export default function CustomHandlerSignals(props) {

const input =

'One thing extra we should learn is catching exit and error messages.\n'+
'We can use the Fun function to see how those messages look like:\n'+
'```erlang\n'+
' FunExit = fun\n'+
'  (#trace{type=exit,mfa=Reason}, MsgNo)->\n'+
'  io:format("Value: ~p Value MsgNo: ~p~n", [{exit, Reason}, MsgNo]),\n'+
'  dbg:stop();\n'+
' (_, MsgNo) -> MsgNo\n'+
' end.\n'+
'```\n'+
'\n'+
'```erlang\n'+
' > dbg:tracer(process,{FunExit,0}).\n'+
'```\n'+
' Lets trace process events, aside of calls.\n'+
'\n'+
'```erlang\n'+
' > dbg:p(all,[p,c]).\n'+
'```\n'+
'\n'+
' And invoke termination with one of the below functions:\n'+
'```erlang\n'+
' gen_statem:cast({global, tracing_experiments}, wrong_cast).\n'+
' exit(global:whereis_name(tracing_experiments), "something").\n'+
' exit(global:whereis_name(tracing_experiments), kill).\n'+
' exit(global:whereis_name(tracing_experiments), normal).\n'+
' ...\n'+
'```\n'+
'Of course when we are dealing with local processes we should replace \n'+
'the `global:whereis_name(ProcessName)` with the `whereis(ProcessName)`.'

  return (
    <div className="my_md_container">
      <ReactMarkdown source={input} />
    </div>
  );
}
