import React from "react"
import "./index.css"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import AppLayout from "./components/AppLayout"
import HomePage from "./components/HomePage"
import Contact from "./components/Contact"
import Projects from "./components/Projects"
import Skills from "./components/Skills"
import About from "./components/About"
import NotFound from "./components/NotFound"
function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route element= {<AppLayout />}>
      <Route path="/" element={<HomePage />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/skills" element={<Skills />} />
      <Route path="/skills" element={<Skills />} />
      <Route path="/about" element={<About />} />
      <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
    </BrowserRouter>
  )
  }

  
  
  

export default App
