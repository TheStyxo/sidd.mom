import "./App.css";

import jokes from "./jokes.json";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <a
          className="App-link"
          href="https://styxo.codes"
          target="_blank"
          rel="noopener noreferrer"
        >
          {jokes[Math.floor(Math.random() * jokes.length)]}
        </a>
      </header>
    </div>
  );
}

export default App;
