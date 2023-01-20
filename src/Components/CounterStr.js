import React, { useState } from 'react';
import './index.css';

function CounterStr() {
  let [countStr, setCountStr] = useState([5]);

  function increase() {
    let str = [...countStr, countStr[countStr.length - 1] + 1]
    setCountStr(str);
  }

  function decrease() {

  }
  function reset() {

  }

  return (
    <div className="counter">
      <h2>COUNTER-STR</h2>
      <div className="counter-value count">
        <div className="count">{countStr}</div>
      </div>
      <div className="buttons">
        <div>
          <button onClick={decrease}>➖</button>
        </div>
        <div>
          <button onClick={reset}>🔄</button>
        </div>
        <div>
          <button onClick={increase}>➕</button>
        </div>
      </div>
    </div>
  );
}

export default CounterStr;
