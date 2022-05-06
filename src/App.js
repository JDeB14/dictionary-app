import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Dictionary 📖</h1>
        <p>What word do you want to look up?</p>
      </header>
      <main>
        <Dictionary />
      </main>
      <footer>
        Coded by{" "}
        <a
          href="https://relaxed-pixie-2dceb4.netlify.app"
          target="_blank"
          rel="noreferrer"
        >
          Jae DeBerry
        </a>
      </footer>
    </div>
  );
}
