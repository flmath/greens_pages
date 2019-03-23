import React from "react";
import {Col} from "reactstrap";

const ColData = props => (
  <Col
    xs={{size: 12, offset: 0}}
    sm={{size: 12, offset: 0}}
    md={{size: 6, offset: 1}}
    lg={{size: 6, offset: 1}}
    xl={{size: 6, offset: 1}}
  >
    {props.children}{" "}
  </Col>
);

const ColOff = props => (
  <Col
    xs={{size: 1, offset: 0}}
    sm={{size: 1, offset: 0}}
    md={{size: 2, offset: 0}}
    lg={{size: 2, offset: 0}}
    xl={{size: 2, offset: 0}}
  >
    <div className="ColOffClass">{props.children}</div>{" "}
  </Col>
);

const ColHalf = props => (
  <Col
    xs={{size: 5, offset: 0}}
    sm={{size: 5, offset: 0}}
    md={{size: 5, offset: 0}}
    lg={{size: 5, offset: 0}}
    xl={{size: 5, offset: 0}}
  >
    {props.children}{" "}
  </Col>
);

const ColPic = props => (
  <Col
    xs={{size: 0, offset: 0}}
    sm={{size: 0, offset: 0}}
    md={{size: 4, offset: 1}}
    lg={{size: 4, offset: 1}}
    xl={{size: 4, offset: 1}}
  >
    {props.children}{" "}
  </Col>
);

const ColKey = props => (
  <Col
    xs={{size: 0, offset: 0}}
    sm={{size: 0, offset: 0}}
    md={{size: 6, offset: 0}}
    lg={{size: 6, offset: 0}}
    xl={{size: 6, offset: 0}}
  >
    {props.children}{" "}
  </Col>
);
const ColVal = props => (
  <Col
    xs={{size: 0, offset: 0}}
    sm={{size: 0, offset: 0}}
    md={{size: 6, offset: 0}}
    lg={{size: 6, offset: 0}}
    xl={{size: 6, offset: 0}}
  >
    {props.children}{" "}
  </Col>
);

const ColShortKey = props => (
  <Col
    xs={{size: 0, offset: 0}}
    sm={{size: 0, offset: 0}}
    md={{size: 4, offset: 1}}
    lg={{size: 4, offset: 1}}
    xl={{size: 4, offset: 1}}
  >
    {props.children}{" "}
  </Col>
);
const ColShortVal = props => (
  <Col
    xs={{size: 0, offset: 0}}
    sm={{size: 0, offset: 0}}
    md={{size: 7, offset: 0}}
    lg={{size: 7, offset: 0}}
    xl={{size: 7, offset: 0}}
  >
    {props.children}{" "}
  </Col>
);

const ColBar = props => (
  <Col
    xs={{size: 10, offset: 0}}
    sm={{size: 10, offset: 0}}
    md={{size: 9, offset: 1}}
    lg={{size: 9, offset: 1}}
    xl={{size: 9, offset: 1}}
  >
    {props.children}{" "}
  </Col>
);

export {
  ColOff,
  ColBar,
  ColData,
  ColHalf,
  ColKey,
  ColPic,
  ColVal,
  ColShortVal,
  ColShortKey
};
