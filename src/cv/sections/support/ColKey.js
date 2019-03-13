import React from 'react';
import {Row, Col } from 'reactstrap';

export default ColKey = props => <Col
xs={{ size: 0, offset: 0 }}
sm={{ size: 0, offset: 0 }}
md={{ size: 5, offset: 1 }}
lg={{ size: 5, offset: 1 }}
xl={{ size: 5, offset: 1 }}
>
{props.children} </Col>;
