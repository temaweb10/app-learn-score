import { useEffect, useState } from "react";
import "./App.css";
import negativeImage from "./img/negative.jpg";
import positiveImage from "./img/positive.jpg";
function App() {
  const [score, setScore] = useState(
    localStorage.getItem("learn-score")
      ? Number(localStorage.getItem("learn-score"))
      : 0
  );

  useEffect(() => {
    localStorage.setItem("learn-score", Number(score));
  }, [score]);

  return (
    <div
      className="App"
      style={{
        backgroundImage: `url(${score < 0 ? negativeImage : positiveImage})`,
      }}
    >
      <header className="App-header">
        <span
          className="App-learn-score"
          style={{ color: score < 0 ? "red" : "green" }}
        >
          {score}
        </span>
        <div className="App-buttons">
          <button
            className="App-button"
            onClick={() => setScore(Number(score) - 3)}
          >
            -3
          </button>
          <button
            className="App-button"
            onClick={() => setScore(Number(score) + 2)}
          >
            +2
          </button>
        </div>
      </header>
    </div>
  );
}

export default App;
