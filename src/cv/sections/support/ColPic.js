import React from 'react';
import {Row, Col } from 'reactstrap';

export default ColPic = props => <Col
  xs={{ size: 0, offset: 0 }}
  sm={{ size: 0, offset: 0 }}
  md={{ size: 4, offset: 0 }}
  lg={{ size: 4, offset: 0 }}
  xl={{ size: 4, offset: 0 }}>
{props.children} </Col>;
