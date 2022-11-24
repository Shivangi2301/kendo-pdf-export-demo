import logo from "./logo.svg";
import "./App.css";
import HTMLExport from "./HTMLExport";

function App() {
  return (
    <div className="App">
      <header className="App-header">        
        <h2>Generate PDF using KendoReact</h2>
        <p>Export HTML using Component and Method</p>
        <HTMLExport />
      </header>
    </div>
  );
}

export default App;
