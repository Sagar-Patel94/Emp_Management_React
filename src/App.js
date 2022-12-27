import "./App.css";
import Navbar from "./components/navbar";
import Content from "./components/content";
import SignUp from "./components/signUp";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Wave } from "react-animated-text";

function App() {
  const animationText = () => <Wave text="Yash Protins" />;
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route
            exact
            path="/"
            element={<Content animation={animationText()} key="home" />}
          />
          <Route exact path="/register" element={<SignUp key="register" />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
