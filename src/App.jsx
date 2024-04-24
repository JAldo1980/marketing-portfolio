import React from "react";
import Container from "./components/Container";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import About from "./components/About";
import CTA from "./components/CTA";
import Footer from "./components/Footer";
import DevCTA from "./components/DevCTA";
import "./App.css";

function App() {
  return (
    <div className="custom-background">
      <Container>
        <Nav />
        <Hero />
        <About />
        <CTA />
        <DevCTA />
        <Footer />
      </Container>
    </div>
  );
}

export default App;
