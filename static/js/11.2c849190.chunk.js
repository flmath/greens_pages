(window.webpackJsonp=window.webpackJsonp||[]).push([[11,17],{52:function(e,n,t){"use strict";t.r(n);var a=t(11),r=t(12),s=t(14),o=t(13),i=t(15),l=t(0),c=t.n(l),u=t(438),g=t(54),h=function(e){function n(){return Object(a.a)(this,n),Object(s.a)(this,Object(o.a)(n).apply(this,arguments))}return Object(i.a)(n,e),Object(r.a)(n,[{key:"render",value:function(){var e=this.props,n=e.language,t=e.value;return c.a.createElement(u.a,{language:n,style:g.coy},t)}}]),n}(l.PureComponent);h.defaultProps={language:null},n.default=h},70:function(e,n,t){"use strict";t.r(n),t.d(n,"default",function(){return l});var a=t(0),r=t.n(a),s=t(53),o=t.n(s),i=t(52);function l(e){return r.a.createElement("div",{className:"my_md_container"},r.a.createElement(o.a,{source:'One thing extra we should learn is catching exit and error messages.\nWe can use the Fun function to see how those messages look like:\n```erlang\n FunExit = fun\n  (#trace{type=exit,mfa=Reason}, MsgNo)->\n  io:format("Value: ~p Value MsgNo: ~p~n", [{exit, Reason}, MsgNo]),\n  dbg:stop();\n (_, MsgNo) -> MsgNo\n end.\n```\n\n```erlang\n > dbg:tracer(process,{FunExit,0}).\n```\n Lets trace process events, aside of calls.\n\n```erlang\n > dbg:p(all,[p,c]).\n```\n\n And invoke termination with one of the below functions:\n```erlang\n gen_statem:cast({global, tracing_experiments}, wrong_cast).\n exit(global:whereis_name(tracing_experiments), "something").\n exit(global:whereis_name(tracing_experiments), kill).\n exit(global:whereis_name(tracing_experiments), normal).\n ...\n```\nOf course, when we are dealing with local processes we should replace \nthe `global:whereis_name(ProcessName)` with the `whereis(ProcessName)`.',renderers:{code:i.default}}))}}}]);
//# sourceMappingURL=11.2c849190.chunk.js.map