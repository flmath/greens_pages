import React from 'react';
import {Container} from "reactstrap";

export function CvHeader(props)
{
  return (
    <div>
      <hr />
      <Container><h2 className="my_cv_header"> {props.children}{" "}</h2></Container>
      <hr />
    </div>
);
}
