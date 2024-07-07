import { useState } from "react";
import "./App.css";
import Links from "./Links";
import NavBar from "./NavBar";

function App() {
  return (
    <div className="bg-gray-400">
      <NavBar></NavBar>
      <Links></Links>
    </div>
  );
}

export default App;
