import React from "react";
import Home from "./Components/Home";
import Details from "./Components/Details";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/Details" element={<Details />}></Route>
      </Routes>
    </div>
  );
}

export default App;
