import logo from './logo.svg';
import './App.css';
import Resume from "./components/Resume";

function App() {
  return (
    <div className="App">
      <Resume url="https://antonpunith.github.io/data/resume.json" />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
