import React from "react";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AppLayout from "./components/AppLayout";
import HomePage from "./components/HomePage";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import About from "./components/About";
import Contact from "./components/Contact";
import NotFound from "./components/NotFound";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/projects" element={<Projects isStandalone={true} />} />
          <Route path="/skills" element={<Skills isStandalone={true} />} />
          <Route path="/experience" element={<Experience isStandalone={true} />} />
          <Route path="/about" element={<About isStandalone={true} />} />
          <Route path="/contact" element={<Contact isStandalone={true} />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
