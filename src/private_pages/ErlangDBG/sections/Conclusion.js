import React from "react";
import ReactMarkdown from 'react-markdown';
import CodeBlock from "../CodeBlock";

export default function Conclusion(props) {

const input =

'* First, try to check other sources of information, in most cases, the erlang dump file should be enough.\n'+
'\n'+
'* If it is possible to install some debug/test framework instead, for example:\n\n'+
'- https://massemanet.github.io/eper/redbug\n\n'+
'- https://ferd.github.io/recon/\n\n'+

'* If you are a consultant check your insurance.\n'+
'\n'+
'* Since the `return_trace` (and `exception_trace`) flag is potentially behavior-changing we\'d better avoid it.\n'+
'\n'+
'* I have omitted `seq_trace` utilities, on purpose, I do not feel well when a single press of the tab key can hang your shell. '+
'But if you are comfortable with sequence tracing on production nodes, then why have you read through this document in the first place?\n'+
'\n'+
'* If you still see need to use dbg on live node start from writing \n'+
'a processing function that has message counter as an accumulator and '+
'safeguards to `dbg:stop/0` after a specific number of printed messages.\n'+
'\n'+
'* It is good when the number of messages is safeguarded in the first header of the defined function (see [`Fun25`](#CustomHandlerMessageFilter)).\n\n'+
'* Alternatively just run `dbg:stop/0` after the first match if you don\'t need to catch more than one message.\n'+

'You can mail me: flmathematic at gmail.com.'

  return (
    <div className="my_md_container">
     <ReactMarkdown source={input} renderers={{ code: CodeBlock }}/>
    </div>
  );
}
