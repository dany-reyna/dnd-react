import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import { observe } from 'app/state/app.observer';
import App from 'app/views/app.component';

const root = document.getElementById('root');

observe(knightPosition => {
  ReactDOM.render(<App knightPosition={knightPosition} />, root);
});
