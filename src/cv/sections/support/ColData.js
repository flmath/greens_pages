import React from 'react';
import {Row, Col } from 'reactstrap';

export default ColData = props => <Col
  xs={{ size: 12, offset: 0 }}
  sm={{ size: 12, offset: 0 }}
  md={{ size: 6, offset: 2 }}
  lg={{ size: 6, offset: 2 }}
  xl={{ size: 6, offset: 2 }}>
{props.children} </Col>;
