import React from 'react';
import ReactDOM from 'react-dom';
import MainFrameLazyWithRouter from './MainFrameLazyWithRouter';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<MainFrameLazyWithRouter />, div);
  ReactDOM.unmountComponentAtNode(div);
});
