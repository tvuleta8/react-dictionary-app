import "./App.css";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Dictionary />
        <footer>
          <a
            href="https://github.com/tvuleta8/react-dictionary-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Source Code
          </a>
        </footer>
      </div>
    </div>
  );
}

export default App;
