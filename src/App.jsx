import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Container from "./components/Container";
import Hero from "./components/Hero";
import About from "./components/About";
import Nav from "./components/Nav";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import CTA from "./components/CTA";
import Footer from "./components/Footer";
import DevCTA from "./components/DevCTA";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="custom-background">
        <Container>
          <Nav />
          <Hero />
          <Routes>
            <Route path="/" element={<About />} />
            <Route path="/Portfolio" element={<Portfolio />} />
            <Route path="/Contact" element={<Contact />} />
          </Routes>
          <CTA />
          <DevCTA />
          <Footer />
        </Container>
      </div>
    </Router>
  );
}

export default App;
