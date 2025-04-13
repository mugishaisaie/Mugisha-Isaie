import React from "react"
import "./index.css"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import AppLayout from "./components/AppLayout"
import HomePage from "./components/HomePage"
import Contact from "./components/Contact"
import Projects from "./components/Projects"
import Experience from "./components/Experience"
import Skills from "./components/Skills"
import Certifications from "./components/Certifications"
import About from "./components/About"
import Educations from "./components/Educations"
import NotFound from "./components/NotFound"
import DarkModeToggle from "./components/DarkModeToggle"
function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route element= {<AppLayout />}>
      <Route path="/" element={<HomePage />} />
      <Route path="/experience" element={<Experience />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/skills" element={<Skills />} />
      <Route path="/skills" element={<Skills />} />
      <Route path="/certifications" element={<Certifications />} />
      <Route path="/about" element={<About />} />
      <Route path="education" element={<Educations />} />
      <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
    </BrowserRouter>
  )
  }

  
  
  

export default App
