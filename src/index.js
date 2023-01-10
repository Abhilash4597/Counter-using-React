import React from 'react';
import ReactDOM from 'react-dom/client';
// import './index.css';
import App from './counter';
import TimerCounter from './countertimer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <App />
    <TimerCounter />
  </>
);
