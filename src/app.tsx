import logo from "./logo.svg";
import "./app.css";
import { threadCount, hello } from "./native";

function App() {
  const threads = threadCount();
  const greeting = hello();

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>{greeting}</p>
        <p>You have {threads} threads</p>
      </header>
    </div>
  );
}

export default App;
