import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Singup from "./components/SignUp";
import Header from "./components/Header";
function App() {
  return (
    <div className="App">
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/singup" element={<Singup />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
