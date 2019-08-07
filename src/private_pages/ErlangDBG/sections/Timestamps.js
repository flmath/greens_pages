import React from "react";
import ReactMarkdown from 'react-markdown';

export default function Timestamps(props) {

const input =
'Lets retrieve timestamps of entering and leaving the function.\n'+
'To get them need to add another two flags in `dbg:p/2`, the `strict_monotonic_timestamp` and `return_to`\n'+

'```erlang\n'+
' > dbg:p(all,[call, strict_monotonic_timestamp, return_to]),\n'+
' > dbg:tpl({tracing_experiments, traced_function, 2},\n'+
'    [{\'$1\', [], [{display, \'$1\'}, {return_trace}]}]).\n'+
'```\n'+
'\n'+
'```erlang\n'+
' > tracing_experiments:switch_state().\n'+
' tracing_experiments.erl:86:<0.134.0>: io:format called from state enter_heavy_state number 91\n'+
' (<0.134.0>) call tracing_experiments:traced_function(enter_heavy_state,91)\n'+
'    ({tracing_experiments, light_state, 3})\n'+
' (Timestamp: {-576091093700236178, -576460752303423401})\n'+
'\n'+
' (<0.134.0>) returning to tracing_experiments:light_state/3 \n'+
'    (Timestamp: {-576091093699220788, -576460752303423400})\n'+
' ok\n'+
'```\n'+
'\n'+
'```erlang\n'+
' > tracing_experiments:switch_state().\n'+
' ok\n'+
'```\n'+
'\n'+
'```erlang\n'+
' TimeDiff = 576091093700236178-576091093699220788.\n'+
' 1015390\n'+
' erlang:convert_time_unit(TimeDiff, native, millisecond).\n'+
' 1\n'+
'```\n'+
'So, we spent one millisecond in `traced_function/2`.\n'


  return (
    <div className="my_md_container">
    <ReactMarkdown source={input} />
    </div>
  );
}
