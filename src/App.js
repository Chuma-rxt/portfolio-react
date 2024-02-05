import React from "react";
import "./index.css";
import Home from "./routes/Home"
import About from "./routes/About"
import Project from "./routes/Project"
import Contact from "./routes/Contact"

import { Rour, Routes } from "resct-router-dom";

function App() {
  return (
    <>
    <Routes>
       <Routes path="/" element={<Home />}    />
       <Routes path="/project" element={<Project />}    />
       <Routes path="/about" element={<About />}    />
       <Routes path="/contact" element={<Contact />}    />
    </Routes>
    </>
  );
}

export default App;
