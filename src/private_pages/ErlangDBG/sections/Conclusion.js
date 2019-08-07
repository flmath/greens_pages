import React from "react";
import ReactMarkdown from 'react-markdown';

export default function Conclusion(props) {

const input =

'* First try check other sources of information, in the most of cases erlang dump file should be enough.\n'+
'\n'+
'* If it is possible install some debug/test framework instead, for example:\n\n'+
'- https://massemanet.github.io/eper/redbug\n\n'+
'- https://ferd.github.io/recon/\n\n'+

'* If you are consultant check your insurance.\n'+
'\n'+
'* Since the `return_trace` (and `exception_trace`) flag is potentially behavior changing we\'d better avoid it.\n'+
'\n'+
'* I have omitted `seq_trace` utilities, on purpose, I do not feel well when single tab can hang your shell. '+
'But if you are comfortable with sequence tracing on production nodes, then why have you read through this document in the first place?\n'+
'\n'+
'* If you still see need to use dbg on live node start from writing \n'+
'a processing function that has message counter as accumulator and '+
'safeguard to `dbg:stop/0` after specific number of printed messages.\n'+
'\n'+
'* It is good when the number of messages is safe guarded in the first header of the defined function (see [`Fun25`](#CustomHandlerMessageFilter)).\n\n'+
'* Alternativelly just run `dbg:stop/0` after first match if you don\'t need to catch more than one message.\n'+

'You can mail me: flmathematic at gmail.com.'

  return (
    <div className="my_md_container">
      <ReactMarkdown source={input} />
    </div>
  );
}
