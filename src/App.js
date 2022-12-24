import "./App.css";
import Navbar from "./components/navbar";
import Content from "./components/content";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Wave } from 'react-animated-text';

function App() {
  const animationText = () => (
    <Wave text="Yash Protins" />
  );
  return (
    <>
      <Router>
        <div className="App">
          <header className="App-header">
            <Navbar />
            <Content animation={animationText()}/>
          </header>
        </div>
      </Router>
    </>
  );
}

export default App;
