import React from "react";
import ReactMarkdown from 'react-markdown';
import CodeBlock from "../CodeBlock";

export default function TraceFunction(props) {

const input =
'Tracing all functions in a module is sometimes too much for printout readability.\n'+
'Fortunately, it is easy to narrow tracing to a specific function. Lets trace `traced_function/2`. First, let us use `dbg:tp`\n'+
'```erlang\n'+
' > dbg:tp({tracing_experiments, traced_function, 2},[]),\n'+
' > tracing_experiments:switch_state().\n'+                 
' tracing_experiments.erl:86:<0.134.0>: io:format called from state enter_heavy_state number 49\n'+
'```\n'+
'\n'+
'```erlang\n'+
' > tracing_experiments:switch_state().\n'+
' ok\n'+
'```\n'+

'Since `traced_function/2` is local we do not get any additional traces. Lets add local tracing.\n'+
'```erlang\n'+
' > dbg:tpl({tracing_experiments, traced_function, 2},[]),\n'+
' > tracing_experiments:switch_state().\n'+
' tracing_experiments.erl:86:<0.134.0>: io:format called from state enter_light_state number 108\n'+
' (<0.134.0>) call tracing_experiments:traced_function(enter_light_state,108)\n'+
'```\n'+
'\n'+
'```erlang\n'+
' > tracing_experiments:switch_state().\n'+
' ok\n'+
'```\n'+
'It works fine, lets extract a little more information, \n'+
'the second argument in `dbg:tp/2` can take a form of `[{ MatchHead, MatchConditions, MatchBody }]`.\n'+

'MatchHead can be `\'_\'` for anonymous variables or we can match it to the variable `\'$1\'` to display it later.\n'+

'```erlang\n'+
' > dbg:tpl({tracing_experiments, traced_function, 2},[{\'$1\', [], [{display, \'$1\'}]}]),\n'+
' > tracing_experiments:switch_state().\n'+
' [enter_light_state,228]\n'+
' tracing_experiments.erl:86:<0.134.0>: io:format called from state enter_light_state number 228\n'+
' (<0.134.0>) call tracing_experiments:traced_function(enter_light_state,228)\n'+
'```\n'+
'\n'+
'```erlang\n'+
' > tracing_experiments:switch_state().\n'+
' ok\n'+
'```\n'+

'So the function is called with parameters enter_light_state and 228.\n'+
'Lets return in body two more pieces of information.\n'+
'The first what values is returned from the function:\n'+

'```erlang\n'+
' > dbg:tpl({tracing_experiments, traced_function, 2},[{\'_\', [], [ {return_trace}]}]),\n'+
' > tracing_experiments:switch_state().\n'+                                         
' tracing_experiments.erl:86:<0.134.0>: io:format called from state enter_heavy_state number 5\n'+
' (<0.134.0>) call tracing_experiments:traced_function(enter_heavy_state,5)\n'+
' (<0.134.0>) returned from tracing_experiments:traced_function/2 -> ok\n'+
' ok\n'+
'```\n'+
'\n'+
'```erlang\n'+
' > tracing_experiments:switch_state().\n'+
' ok\n'+
'```\n'+
'It returns an `ok` atom from debug printing function. \n'+
'It is worth mentioning that according to documentation `{return_trace}` can\n'+
'interfere with the system behavior.\n'+
'If you want also the `\'EXIT\'` messages to be displayed you can replace `{return_trace}` with `{exception_trace}` instead.\n'+
'\n'+
'Reference: [Erlang documentation: functions allowed only for tracing.](http://erlang.org/doc/apps/erts/match_spec.html#functions-allowed-only-for-tracing)\n'


  return (
    <div className="my_md_container">
      <ReactMarkdown source={input} renderers={{ code: CodeBlock }}/>
    </div>
  );
}
