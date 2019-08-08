import React from "react";
import ReactMarkdown from 'react-markdown';
import CodeBlock from "../CodeBlock";


export default function Setup(props) {

const input =
'The tracing_experiments application is very simple gen_statem written specifically to test debugging facilities.\n'+
'You can find it on [my GitHub repo](https://github.com/flmath/tracing_experiments). '+
'All experiments are run in a shell started with:\n\n'+
'```bash\n'+
'$ local_rebar/rebar3 as dbg shell\n'+
'``` \n\n'+
'for a clear view.'

  return (
    <div className="my_md_container">
    <ReactMarkdown source={input} renderers={{ code: CodeBlock }}/>
    </div>
  );
}
