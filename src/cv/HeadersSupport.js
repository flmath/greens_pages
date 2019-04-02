import React from 'react';
import {Container} from "reactstrap";

export function CvHeader(props)
{
  return (
    <div>
      <Container>
      <hr className="my_cv_header" />
      <h2 className="my_cv_header"> {props.children}{" "}</h2>
      <hr className="my_cv_header" />
      </Container>
    </div>
);
}
