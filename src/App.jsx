import React from "react";
import Container from "./components/Container";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import "./App.css";

function App() {
  return (
    <div className="custom-background">
      <Container>
        <Nav />
        <Hero />
      </Container>
    </div>
  );
}

export default App;
