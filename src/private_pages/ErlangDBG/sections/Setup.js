import React from "react";
import ReactMarkdown from 'react-markdown';

export default function Setup(props) {

const input =
'The tracing_experiments application is very simple gen_statem written specifically to test debugging facilities.\n'+
'You can find it on [my github repo](https://github.com/flmath/tracing_experiments). '+
'All experiments are run in shell started with:\n'+
'```bash\n'+
' $ local_rebar/rebar3 as dbg shell\n'+
'```\n'+
'for a clear view.'

  return (
    <div className="my_md_container">
    <ReactMarkdown source={input} />
    </div>
  );
}
