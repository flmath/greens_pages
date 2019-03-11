import React from 'react';
import ReactDOM from 'react-dom';
import MainFrame from './MainFrame';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<MainFrame />, div);
  ReactDOM.unmountComponentAtNode(div);
});
