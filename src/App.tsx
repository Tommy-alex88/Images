import axios from "./axios";
import "./App.css";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    axios.get("/images").then((res) => {
      console.log(res);
    });
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>TEST APP</h1>
      </header>
    </div>
  );
}

export default App;
