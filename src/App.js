import { useEffect, useState } from "react";
import "./App.css";
function App() {
  const [score, setScore] = useState(
    localStorage.getItem("learn-score")
      ? localStorage.getItem("learn-score")
      : 0
  );

  useEffect(() => {
    localStorage.setItem("learn-score", score);
  }, [score]);

  return (
    <div className="App">
      <header className="App-header">
        <span
          className="App-learn-score"
          style={{ color: score < 0 ? "red" : "green" }}
        >
          {score}
        </span>
        <div className="App-buttons">
          <button className="App-button" onClick={() => setScore(score - 3)}>
            -3
          </button>
          <button className="App-button" onClick={() => setScore(score + 2)}>
            +2
          </button>
        </div>
      </header>
    </div>
  );
}

export default App;
