(window.webpackJsonp=window.webpackJsonp||[]).push([[6,17],{52:function(e,t,n){"use strict";n.r(t);var a=n(11),r=n(12),s=n(14),i=n(13),o=n(15),c=n(0),l=n.n(c),u=n(438),g=n(54),m=function(e){function t(){return Object(a.a)(this,t),Object(s.a)(this,Object(i.a)(t).apply(this,arguments))}return Object(o.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e=this.props,t=e.language,n=e.value;return l.a.createElement(u.a,{language:t,style:g.coy},n)}}]),t}(c.PureComponent);m.defaultProps={language:null},t.default=m},64:function(e,t,n){"use strict";n.r(t),n.d(t,"default",function(){return l});var a=n(0),r=n.n(a),s=n(53),i=n.n(s),o=n(52),c="Let us start with a basic scenario. I will omit some of the messages printed out by the shell for clarity.\n```erlang\n > dbg:tracer(). \n {ok,<0.218.0>}\n```\n```erlang\n > dbg:p(all,[c]).\n {ok,[{matched,nonode@nohost,71}]}\n```\n```erlang\n > dbg:tp(tracing_experiments, []).\n (<0.117.0>) call tracing_experiments:module_info()\n {ok,[{matched,nonode@nohost,13}]}\n```\nNow lets switch traced process to more busy state:\n```erlang\n > tracing_experiments:switch_state().\n```\nWe get messages in a loop:\n```erlang\n tracing_experiments.erl:86:<0.134.0>: io:format called from state keep_heavy_state number 8\n (<0.134.0>) call tracing_experiments:heavy_state(timeout,1000,#{iterator => 8})\n ...\n```\nLets switch back:\n```erlang\n > tracing_experiments:switch_state().\n ok\n```\nThe first message comes from debug function we have put into the code.\nThe second is actually printed out by our `dbg:tracer/0`\nBut if you look into the code, there is another `traced_function/2` that is present in the\ntracing_experiments module that is not printed out. It is because `dbg:tp/2` prints only the exported functions.\nFor local functions we need also to run:\n```erlang\n > dbg:tpl(tracing_experiments, []).\n (<0.117.0>) call tracing_experiments:module_info()\n {ok,[{matched,nonode@nohost,14}]}\n```\nLet us see how it works:\n```erlang\n > tracing_experiments:switch_state().\n (<0.117.0>) call tracing_experiments:switch_state()\n tracing_experiments.erl:86:<0.134.0>: io:format called from state enter_heavy_state number 26\n (<0.134.0>) call tracing_experiments:light_state(cast,switch_state,#{iterator => 26})\n (<0.134.0>) call tracing_experiments:traced_function(enter_heavy_state,26)\n ok\n```\n```erlang\n > tracing_experiments:switch_state()\n ok \n```\nSo we can see additional printout for `traced_function/2`.\nWhich concludes the most basic scenario.\nLet clean our tracing setup.\n```erlang\n > dbg:ctp('_').\n ok\n```\nLets double check it.\n```erlang\n > tracing_experiments:switch_state().\n tracing_experiments.erl:86:<0.134.0>: io:format called from state enter_light_state number 39\n```\n\n```erlang\n > tracing_experiments:switch_state().\n ok\n```\nThe call tracing is set off.\n";function l(e){return r.a.createElement("div",{className:"my_md_container"},r.a.createElement(i.a,{source:c,renderers:{code:o.default}}))}}}]);
//# sourceMappingURL=6.84c7136d.chunk.js.map