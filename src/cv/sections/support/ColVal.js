import React from 'react';
import {Row, Col } from 'reactstrap';

export default ColVal = props => <Col
  xs={{ size: 0, offset: 0 }}
  sm={{ size: 0, offset: 0 }}
  md={{ size: 6, offset: 0 }}
  lg={{ size: 6, offset: 0 }}
  xl={{ size: 6, offset: 0 }}>
{props.children} </Col>;
