(window.webpackJsonp=window.webpackJsonp||[]).push([[10,17],{52:function(n,e,t){"use strict";t.r(e);var a=t(11),r=t(12),c=t(14),i=t(13),o=t(15),s=t(0),u=t.n(s),l=t(438),p=t(54),d=function(n){function e(){return Object(a.a)(this,e),Object(c.a)(this,Object(i.a)(e).apply(this,arguments))}return Object(o.a)(e,n),Object(r.a)(e,[{key:"render",value:function(){var n=this.props,e=n.language,t=n.value;return u.a.createElement(l.a,{language:e,style:p.coy},t)}}]),e}(s.PureComponent);d.defaultProps={language:null},e.default=d},69:function(n,e,t){"use strict";t.r(e),t.d(e,"default",function(){return s});var a=t(0),r=t.n(a),c=t(53),i=t.n(c),o=t(52);function s(n){return r.a.createElement("div",{className:"my_md_container"},r.a.createElement(i.a,{source:"Now we can customize our processing function.\nLet it print the first 2 messages that state number is multiplication of 5:\nFor clarity lets define trace record in our shell\n```erlang\n > rd(trace, {pid, type, mfa}).\n```\n\n```erlang\n Fun25 = fun\n  (X, 2) ->\n  dbg:stop();\n  (#trace{type=call,mfa={_,_,[keep_heavy_state, X]}}, Acc)\n  when 0==(X rem 5) ->\n  io:format(\"Value X:~p Value Acc: ~p~n\", [X,Acc]),\n  Acc+1;\n (_, Acc) -> Acc\n end.\n #Fun<erl_eval.12.128620087> \n```\n\n```erlang\n > dbg:tracer(process,{Fun25,0}),\n > dbg:p(all,[c]),\n > dbg:tpl({tracing_experiments, traced_function, 2},[{'_', [], []}]).\n```\n\n```erlang\ntracing_experiments:switch_state().\n...\ntracing_experiments:switch_state().\n```\nNow we know how to add pattern matching to our not-blocking-shell solution.\n",renderers:{code:o.default}}))}}}]);
//# sourceMappingURL=10.98d3be6d.chunk.js.map