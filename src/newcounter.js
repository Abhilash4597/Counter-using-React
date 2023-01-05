import React,{ useState } from 'react';
import './index.css';

function TimerCounter() {
  let [timer, setTimer] = useState(0);
  let [timerRef, setTimerRef] = useState(null);
  
  const start = () => {
    setTimerRef(setInterval(() => {
      setTimer(timer++);
    }, 500));
  };

  const stop = () => {
    clearInterval(timerRef);
  };

  const reset = () => {
    setTimer(0);
  };

  return (
    <div className="counter">
      <h2>COUNTER TIMER</h2>
      <div className="counter-value count">
        <div className="count">{timer}</div>
      </div>
      <div className="buttons">
        <div>
          <button onClick={() => start()}>🏃‍♂️</button>
        </div>
        <div>
          <button onClick={() => reset()}>🔄</button>
        </div>
        <div>
          <button onClick={() => stop()}>⏹</button>
        </div>
      </div>
    </div>
  );
}

export default TimerCounter;
