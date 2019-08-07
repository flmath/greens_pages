import React from "react";
import ReactMarkdown from 'react-markdown';

const input =
'Lets start with a basic scenario. I will omit some of the messages printed out by the shell for clarity.\n'+

'```erlang\n'+
' > dbg:tracer(). \n'+
' {ok,<0.218.0>}\n'+
'```\n'+
'```erlang\n'+
' > dbg:p(all,[c]).\n'+
' {ok,[{matched,nonode@nohost,71}]}\n'+
'```\n'+
'```erlang\n'+
' > dbg:tp(tracing_experiments, []).\n'+
' (<0.117.0>) call tracing_experiments:module_info()\n'+
' {ok,[{matched,nonode@nohost,13}]}\n'+
'```\n'+
'Now lets switch traced process to more busy state:\n'+
'```erlang\n'+
' > tracing_experiments:switch_state().\n'+
'```\n'+
'We get messages in a loop:\n'+
'```erlang\n'+
' tracing_experiments.erl:86:<0.134.0>: io:format called from state keep_heavy_state number 8\n'+
' (<0.134.0>) call tracing_experiments:heavy_state(timeout,1000,#{iterator => 8})\n'+
' ...\n'+
'```\n'+
'Lets switch back:\n'+
'```erlang\n'+
' > tracing_experiments:switch_state().\n'+
' ok\n'+
'```\n'+

'The first message comes from debug function we have put into the code.\n'+
'The second is actually printed out by our `dbg:tracer/0`\n'+
'But if you look into the code, there is another `traced_function/2` that is present in the\n'+
'tracing_experiments module that is not printed out. It is because `dbg:tp/2` prints only the exported functions.\n'+
'For local functions we need also to run:\n'+
'```erlang\n'+
' > dbg:tpl(tracing_experiments, []).\n'+
' (<0.117.0>) call tracing_experiments:module_info()\n'+
' {ok,[{matched,nonode@nohost,14}]}\n'+
'```\n'+
'Lets see how it works:\n'+
'```erlang\n'+
' > tracing_experiments:switch_state().\n'+
' (<0.117.0>) call tracing_experiments:switch_state()\n'+
' tracing_experiments.erl:86:<0.134.0>: io:format called from state enter_heavy_state number 26\n'+
' (<0.134.0>) call tracing_experiments:light_state(cast,switch_state,#{iterator => 26})\n'+
' (<0.134.0>) call tracing_experiments:traced_function(enter_heavy_state,26)\n'+
' ok\n'+
'```\n'+
'```erlang\n'+
' > tracing_experiments:switch_state()\n'+
' ok \n'+
'```\n'+

'So we can see additional printout for `traced_function/2`.\n'+
'Which concludes the most basic scenario.\n'+
'Let clean our tracing setup.\n'+
'```erlang\n'+
' > dbg:ctp(\'_\').\n'+
' ok\n'+
'```\n'+
'Lets double check it.\n'+
'```erlang\n'+
' > tracing_experiments:switch_state().\n'+
' tracing_experiments.erl:86:<0.134.0>: io:format called from state enter_light_state number 39\n'+
'```\n'+
'\n'+
'```erlang\n'+
' > tracing_experiments:switch_state().\n'+
' ok\n'+
'```\n'+
'The call tracing is set off.\n'

export default function BasicScenario(props) {

  return (
    <div className="my_md_container">
     <ReactMarkdown source={input} />
    </div>
  );
}
