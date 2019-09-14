(window.webpackJsonp=window.webpackJsonp||[]).push([[15,17],{52:function(e,n,t){"use strict";t.r(n);var a=t(11),r=t(12),i=t(14),c=t(13),o=t(15),s=t(0),l=t.n(s),u=t(438),m=t(54),_=function(e){function n(){return Object(a.a)(this,n),Object(i.a)(this,Object(c.a)(n).apply(this,arguments))}return Object(o.a)(n,e),Object(r.a)(n,[{key:"render",value:function(){var e=this.props,n=e.language,t=e.value;return l.a.createElement(u.a,{language:n,style:m.coy},t)}}]),n}(s.PureComponent);_.defaultProps={language:null},n.default=_},67:function(e,n,t){"use strict";t.r(n),t.d(n,"default",function(){return s});var a=t(0),r=t.n(a),i=t(53),c=t.n(i),o=t(52);function s(e){return r.a.createElement("div",{className:"my_md_container"},r.a.createElement(c.a,{source:"Let us retrieve timestamps of entering and leaving the function.\nTo get them to need to add another two flags in `dbg:p/2`, the `strict_monotonic_timestamp`, and `return_to`\n```erlang\n > dbg:p(all,[call, strict_monotonic_timestamp, return_to]),\n > dbg:tpl({tracing_experiments, traced_function, 2},\n    [{'$1', [], [{display, '$1'}, {return_trace}]}]).\n```\n\n```erlang\n > tracing_experiments:switch_state().\n tracing_experiments.erl:86:<0.134.0>: io:format called from state enter_heavy_state number 91\n (<0.134.0>) call tracing_experiments:traced_function(enter_heavy_state,91)\n    ({tracing_experiments, light_state, 3})\n (Timestamp: {-576091093700236178, -576460752303423401})\n\n (<0.134.0>) returning to tracing_experiments:light_state/3 \n    (Timestamp: {-576091093699220788, -576460752303423400})\n ok\n```\n\n```erlang\n > tracing_experiments:switch_state().\n ok\n```\n\n```erlang\n TimeDiff = 576091093700236178-576091093699220788.\n 1015390\n erlang:convert_time_unit(TimeDiff, native, millisecond).\n 1\n```\nSo, we spent one millisecond in `traced_function/2`.\n",renderers:{code:o.default}}))}}}]);
//# sourceMappingURL=15.979cfac8.chunk.js.map