import React from 'react';
import {Row, Col } from 'reactstrap';

export default ColHalf = props => <Col
  xs={{ size: 5, offset: 0 }}
  sm={{ size: 5, offset: 0 }}
  md={{ size: 5, offset: 0 }}
  lg={{ size: 5, offset: 0 }}
  xl={{ size: 5, offset: 0 }}>
{props.children} </Col>;
