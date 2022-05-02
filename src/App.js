import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Dictionary</h1>
        <p>What word do you want to look up?</p>
      </header>
      <Dictionary />
    </div>
  );
}
