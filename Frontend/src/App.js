import './App.css';
import * as React from "react";
import Navbar from './Components/Navbar';
import { Routes, Route } from "react-router-dom";
import Home from './Pages/Home';
import About from './Components/About';
import Project from './Components/Project';
import Portfolio from './Components/Portfolio';
import Hire from './Components/Hire';
import Footer from './Components/Footer';



function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="project" element={<Project />} />
        <Route path="portfolio" element={<Portfolio />} />
        <Route path="hire" element={<Hire />} />
      </Routes>
      <Footer />

    </>
  );
}

export default App;
