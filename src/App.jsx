import { useState } from "react";
import "./App.css";
function App() {
  const [count, setCount] = useState(0);
  return (
    <div className="container">
      <div className="card">
        <h1>Counter App</h1>
        <h2>{count}</h2>
        <div className="buttons">
          <button className="inc" onClick={() => setCount(count + 1)}>
            +
          </button>
          <button className="dec" onClick={() => setCount(count - 1)}>
            -
          </button>
          <button className="reset" onClick={() => setCount(0)}>
            Reset
          </button>
        </div>
      </div>
    </div>
  );
}
export default App;
