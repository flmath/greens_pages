import React from 'react';

export function CvHeader(props)
{ return (
<div>
  <br />
  <hr />
  <h2> {props.children}{" "}</h2>
  <hr />
</div>

);
}
