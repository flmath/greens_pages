import React from "react";

export default function Introduction(props) {
  return (
    <div className="my_md_container">
        <p>
When you ask an Erlang acolyte why this language is so great you will hear about functional programming advantages
or about beauty of the actor model. But what really makes Erlang worth spending time is its maturity.
      </p>
      <p>An important aspect of this maturity is Virtual Machine you can relay on and the OTP platform.
Those two features provides us with dbg library that is part of OTP,
which means normally it is shipped even on production servers.
      Unfortunately not everyone find the tool user friendly and when used wrong way,
       it can do a lot of harm to your the system (see <a href="#CustomHandler">Custom Handler: Introduction</a>).
        </p>
    </div>
  );
}
