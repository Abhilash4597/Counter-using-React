import React from 'react';
import ReactDOM from 'react-dom/client';
// import './index.css';
import App from './Components/counter';
import TimerCounter from './Components/countertimer';
import CounterStr from './Components/CounterStr';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <App />
    <TimerCounter />
    <CounterStr />
  </>
);
