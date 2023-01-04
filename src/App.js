import { useState } from "react";
import "./index.css";

function App() {
  const [counter, setCounter] = useState(0);

  const increase = () => {
    setCounter(counter + 1);
  };

  const decrease = () => {
    setCounter(counter - 1);
  };

  const reset = () => {
    setCounter(0);
  };

  return (
    <div className="counter">
      <h2>COUNTER</h2>
      <div className="counter-value count">
        <div className="count">{counter}</div>
      </div>
      <div className="buttons">
        <div>
          <button onClick={() => decrease()}>➖</button>
        </div>
        <div>
          <button onClick={() => reset()}>🔄</button>
        </div>
        <div>
          <button onClick={() => increase()}>➕</button>
        </div>
      </div>
    </div>
  );
}

export default App;
