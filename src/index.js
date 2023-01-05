import React from 'react';
import ReactDOM from 'react-dom/client';
// import './index.css';
import App from './App';
import TimerCounter from './newcounter';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <App />
    <TimerCounter />
  </>
);

