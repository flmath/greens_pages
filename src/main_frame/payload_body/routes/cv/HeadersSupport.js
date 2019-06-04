import React from 'react';
import {Row, Col} from "reactstrap";
export function CvHeader(props)
{
  return (
    <div className="my_cv_header_container">

      <Row className="my_cv_header_container_row">

      <Col>
      <hr className="my_cv_header" />
      <h2 className="my_cv_header"> {props.children}{" "}</h2>
      <hr className="my_cv_header" />
      </Col>
      </Row>

    </div>
);
}
